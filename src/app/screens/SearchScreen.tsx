import {SearchForm} from "../components/search/SearchForm";
import {useState} from "react";
import {BookCard} from "../components/book/BookCard";
import {ScrollView} from "react-native";
import {Book} from "../model/book";

export function SearchScreen() {
    const [books, setBooks] = useState([] as Book[]);

    return (
        <ScrollView>
            <SearchForm setBooks={setBooks} />
            {books.map(book => {
                return <BookCard book={book} key={book.key} />
            })}
        </ScrollView>
    );
}
