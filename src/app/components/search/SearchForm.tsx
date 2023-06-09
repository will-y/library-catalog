import {StyleSheet, Text, View} from "react-native";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogHeader,
    IconButton,
    Stack,
    TextInput
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {Formik, FormikValues} from "formik";
import {useState} from "react";
import {capitalize} from "../../utils/string-utils";
import {searchForBooks} from "../../services/book-service";

export function SearchForm(props) {
    const [visible, setVisible] = useState(false);
    const [description, setDescription] = useState('');

    function onFormSubmit(values: FormikValues) {
        searchForBooks(values).then(searchResults => {
            props.setBooks(searchResults.books);
        });
    }

    return (
        <>
            <Stack spacing={10} style={{margin: 16}}>
                <Text >Search For Book</Text>
                <Formik
                    initialValues={{title: '', author: '', subject: '', place: '', person: '', publisher: ''}}
                    onSubmit={onFormSubmit}>
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View>
                            {formElements.map(element => {
                                return <TextInput variant='outlined'
                                                  label={capitalize(element.name)}
                                                  onChangeText={handleChange(element.name)}
                                                  onBlur={handleBlur(element.name)}
                                                  value={values[element.name]}
                                                  style={styles.input}
                                                  key={element.name}
                                                  trailing={props => (
                                                      <IconButton onTouchStart={() => {
                                                          setVisible(true);
                                                          setDescription(element.description);
                                                      }}
                                                                  icon={props => <Icon name="information" {...props} />} {...props} />
                                                  )} />
                            })}
                            <Button onPress={handleSubmit} title="Search" />
                        </View>)}
                </Formik>
            </Stack>
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <DialogHeader title="Dialog Header" />
                <DialogContent>
                    <Text>{description}</Text>
                </DialogContent>
                <DialogActions>
                    <Button
                        title="Ok"
                        compact
                        variant="text"
                        onPress={() => setVisible(false)} />
                </DialogActions>
            </Dialog>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10
    }
});

const formElements = [
    {
        name: 'title',
        description: 'Title Description'
    },
    {
        name: 'author',
        description: 'Author Description'
    },
    {
        name: 'subject',
        description: 'Subject Description'
    },
    {
        name: 'place',
        description: 'Place Description'
    },
    {
        name: 'person',
        description: 'Person Description'
    },
    {
        name: 'publisher',
        description: 'Publisher Description'
    }
];
