import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {BarCodeScanner} from "expo-barcode-scanner";
import {Button} from "@react-native-material/core";
import {searchForBooks} from "../services/book-service";
import {Book} from "../model/book";
import {BookCard} from "../components/book/BookCard";

export function ScanScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const [books, setBooks] = useState([] as Book[]);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (!hasPermission) {
        return <Text>No access to camera</Text>;
    }

    const handleBarCodeScanned = ({ type, data }) => {
        // Data is just ISBN!
        setScanned(true);
        searchForBooks({isbn: data}).then(searchResults => {
            if (searchResults) {
                setBooks(searchResults.books);
            }
        });
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    return (
        <>
            {scanned && books.length > 0 ?
                <ScrollView style={{paddingTop: 10}}>
                    {books.map(book => {
                        return <BookCard book={book} key={book.key} navigation={navigation} searchScreen={true}/>
                    })}
                    <Button style={{marginLeft: 15, marginRight: 15}} title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
                </ScrollView> :
                <View style={StyleSheet.absoluteFillObject}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {scanned && <Button title={'Tap to Scan Again'} onPress={() => {
                        setScanned(false)
                        setBooks([]);
                    }} />}
                </View>
            }
        </>
    );
}
