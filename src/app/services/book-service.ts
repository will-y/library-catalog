import {SearchDto} from "../model/search-dto";
import {BookDto} from "../model/book-dto";

export async function searchForBook() {
    try {
        const response = await fetch('https://openlibrary.org/search.json?title=ender%27s%20game&limit=5');
        const json = await response.json();
        const searchResults = convertToSearchDto(json);
        console.log(json);
        console.log(searchResults);
        return searchResults;
    } catch (error) {
        console.error(error);
    } finally {

    }
}

function convertToSearchDto(jsonResponse: any): SearchDto {
    const result = new SearchDto();
    result.start = jsonResponse['start'];
    result.numFound = jsonResponse['num_found'];
    result.books = jsonResponse['docs'].map(convertToBookDto);

    return result;
}

function convertToBookDto(jsonResponse: any): BookDto {
    const result = new BookDto();

    result.authorKey = jsonResponse['author_key'];
    result.authorName = jsonResponse['author_name'];
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

    return result;
}
