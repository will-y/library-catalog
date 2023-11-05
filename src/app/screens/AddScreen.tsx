import {ScrollView} from "react-native";
import {BookForm} from "../components/book/BookForm";
import {Book} from "../model/book";

export function AddScreen( { route }) {
    let book: Book = route.params && route.params.book ? route.params.book : new Book();

    return (
        <ScrollView>
            <BookForm book={book} />
        </ScrollView>
    );
}
