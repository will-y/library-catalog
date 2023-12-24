import {ScrollView} from "react-native";
import {getLibrary} from "../services/book-service";
import {Book} from "../model/book";
import {BookCard} from "../components/book/BookCard";
import {useEffect, useState} from "react";

export function HomeScreen({ navigation }) {
    const [books, setBooks] = useState([] as Book[]);

    useEffect(() => {
        return getLibrary((dbBooks) => {
            setBooks(dbBooks);
        });
    }, []);

    return (
        <ScrollView style={{paddingTop: 10, paddingBottom: 10}}>
            {books.map(book => {
                return <BookCard book={book} key={book.key} navigation={navigation} searchScreen={false}/>
            })}
        </ScrollView>
    );
}
