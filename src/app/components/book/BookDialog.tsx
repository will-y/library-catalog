import {Image, ScrollView, Text} from "react-native";
import {arrayToString} from "../../utils/string-utils";
import {Stack} from "@react-native-material/core";
import {Book} from "../../model/book";
import {BookImage} from "./BookImage";

export function BookDialog(props) {
    const book: Book = props.book;

    return (
        <ScrollView>
            <Stack spacing={10}>
                <Text>{arrayToString(book.authorName)}</Text>
                <BookImage coverURL={book.coverURL}/>
                <Text>Published In {book.firstPublishYear}</Text>
                {book.ratingsCount ? <Text>Rated {Math.round(book.ratingsAverage * 100) / 100} with {book.ratingsCount} ratings</Text> : <></>}
                {book.subject ? <Text>Tags: {arrayToString(book.subject.slice(0, 10))}</Text> : <></>}
            </Stack>
        </ScrollView>
    );
}
