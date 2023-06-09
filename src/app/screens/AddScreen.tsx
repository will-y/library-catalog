import {Text, View} from "react-native";
import {useEffect} from "react";
import {searchForBook} from "../services/book-service";

export function AddScreen() {
    useEffect(() => {
        searchForBook().then(searchResults => {
            console.log('in add component', searchResults);
        });
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Add Book Screen!</Text>
        </View>
    );
}
