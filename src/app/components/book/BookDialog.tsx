import {ScrollView, StyleSheet, Text} from "react-native";
import {arrayToString} from "../../utils/string-utils";
import {Flex, Stack} from "@react-native-material/core";
import {Book} from "../../model/book";
import {BookImage} from "./BookImage";
import {ListExpander} from "../ListExpander";

export function BookDialog(props) {
    const book: Book = props.book;

    return (
        <ScrollView>
            <Stack spacing={15}>
                <Text style={styles.title}>{book.title} {book.firstPublishYear ? <Text style={styles.greyText}>({book.firstPublishYear})</Text> : <></>}</Text>
                <Flex direction='row' justify='between'>
                    <Flex shrink={2}>
                        <Stack spacing={10}>
                            <Text>{arrayToString(book.authorName)}</Text>
                            {book.ratingsCount ? <Text>{Math.round(book.ratingsAverage * 100) / 100}/5  ({book.ratingsCount} ratings)</Text> : <></>}
                        </Stack>
                    </Flex>
                    <Flex shrink={0}>
                        <BookImage coverURL={book.coverURL}/>
                    </Flex>
                </Flex>
                {book.subject ? <Text style={styles.greyText}>Tags: <ListExpander list={book.subject}/></Text> : <></>}
            </Stack>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    greyText: {
        color: '#8a8a8a'
    }
});
