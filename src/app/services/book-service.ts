import {SearchDto} from "../model/search-dto";
import {Book} from "../model/book";
import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';

export async function searchForBooks(searchTerms: any) {
    try {
        const searchURL = createSearchUrl(searchTerms);
        const response = await fetch(searchURL);
        const json = await response.json();
        return convertToSearchDto(json);
    } catch (error) {
        console.error('Error fetching books', error);
    } finally {

    }
}

function createSearchUrl(searchTerms: any): string {
    const urlParams = Object.entries(searchTerms).map(([key, value]) => {
        // @ts-ignore
        return getURLComponent(key, value.toString());
    }).filter(x => x !== '');

    // Good example, might be more fields: https://openlibrary.org/search.json?limit=10&title=Ender

    return `https://openlibrary.org/search.json?limit=10&${urlParams.join('&')}`;
}

function getURLComponent(field: string, value: string) {
    if (!value) {
        return '';
    } else {
        return `${field}=${encodeURIComponent(value)}`;
    }
}

function convertToSearchDto(jsonResponse: any): SearchDto {
    const result = new SearchDto();
    result.start = jsonResponse['start'];
    result.numFound = jsonResponse['num_found'];
    result.books = jsonResponse['docs'].map(convertToBookDto);

    return result;
}

function convertToBookDto(jsonResponse: any): Book {
    const result = new Book();

    result.authorKey = jsonResponse['author_key'];
    result.authorName = jsonResponse['author_name'];
    result.coverURL = convertCoverIdToUrl(jsonResponse['cover_i'])
    result.firstPublishYear = jsonResponse['first_publish_year'];
    result.isbn = jsonResponse['isbn'];
    result.person = jsonResponse['person'];
    result.personKey = jsonResponse['person_key'];
    result.place = jsonResponse['place'];
    result.placeKey = jsonResponse['place_key'];
    result.ratingsAverage = jsonResponse['ratings_average'];
    result.ratingsCount = jsonResponse['ratings_count'];
    result.subject = jsonResponse['subject'];
    result.subjectKey = jsonResponse['subject_key'];
    result.title = jsonResponse['title'];
    result.key = jsonResponse['key'];
    result.publishers = jsonResponse['publisher']

    return result;
}

function convertCoverIdToUrl(cover: number): string {
    if (!cover) return '';

    return `https://covers.openlibrary.org/b/id/${cover}-M.jpg`;
}

export function saveBook(book: Book): void {
    const newReference = database().ref("/TEST/1/books").push();

    newReference.set(book).then((value) => {
        console.log("Book saved: " + value);
    });
}

export function getLibrary(callback: (books: Book[]) => void) {
    const dbCallback = (snapshot:  FirebaseDatabaseTypes.DataSnapshot) => {
        callback(mapResultToArray(snapshot.val()));
    }
    database().ref("/TEST/1/books").on('value', dbCallback);

    return () => {database().ref("/TEST/1/books").off('value', dbCallback)}
}

export function unsubscribeFromLibrary() {

}

function mapResultToArray(value: any): Book[] {
    const books: Book[] = [];
    for (const [key, book] of Object.entries(value)) {
        // @ts-ignore
        book.firebaseKey = key;
        // @ts-ignore
        if (!(book.authorName instanceof Array)) {
            // @ts-ignore
            book.authorName = [book.authorName];
        }
        // @ts-ignore
        books.push(book);
    }

    return books;
}
