import {ScrollView} from "react-native";
import {BookForm} from "../components/book/BookForm";
import {Book} from "../model/book";

export function AddScreen() {
    return (
        <ScrollView>
            <BookForm book={new Book()} />
        </ScrollView>
    );
}
