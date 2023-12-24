import {ScrollView} from "react-native";
import {BookForm} from "../components/book/BookForm";
import {Book} from "../model/book";

export function AddScreen( { navigation, route }) {
    const book: Book = route.params && route.params.book ? route.params.book : new Book();
    if (route.params) {
        route.params.book = null;
    }

    return (
        <ScrollView>
            <BookForm book={book} navigation={navigation}/>
        </ScrollView>
    );
}
