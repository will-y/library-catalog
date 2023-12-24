import {Book} from "../../model/book";
import {StyleSheet, Text} from "react-native";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Pressable,
    Surface
} from "@react-native-material/core";
import {useState} from "react";
import {arrayToString} from "../../utils/string-utils";
import {BookDialog} from "./BookDialog";

interface BookCardProps {
    book: Book,
    navigation: any,
    searchScreen: boolean
}

export function BookCard(props: BookCardProps) {
    const book: Book = props.book;
    const [showDialog, setShowDialog] = useState(false);

    function onAddPress() {
        setShowDialog(false);
        props.navigation.navigate('Add Book', {book: book});
    }

    return (
        <>
            <Surface style={styles.card} elevation={2} category='medium'>
                <Pressable style={styles.pressable} onPress={() => setShowDialog(true)}>
                    <Text style={styles.title}>{book.title}</Text>
                    <Text>{arrayToString(book.authorName)}</Text>
                </Pressable>
            </Surface>
            <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
                <DialogContent>
                    <BookDialog book={book} />
                </DialogContent>
                {props.searchScreen ? <DialogActions>
                    <Button
                        title="Add"
                        compact
                        variant="text"
                        onPress={onAddPress}/>
                </DialogActions> : <></>}
            </Dialog>
        </>
    );
}



const styles = StyleSheet.create({
    card: {
        marginBottom: 5,
        marginStart: 15,
        marginEnd: 15
    },
    title: {
        fontSize: 20
    },
    pressable: {
        padding: 20
    }
});
