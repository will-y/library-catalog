import {StyleSheet, Text, View} from "react-native";
import {Formik, FormikValues} from "formik";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogHeader,
    IconButton, Stack,
    TextInput
} from "@react-native-material/core";
import {capitalize} from "../../utils/string-utils";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {useState} from "react";

interface GeneralFormProps {
    formTitle: string,
    initialValues: any,
    onSubmit: (values: FormikValues) => void,
    formElements: FormElement[],
    submitText: string
}

export interface FormElement {
    name: string,
    description?: string,
    multi?: string,
    type?: string
}

export function GeneralForm(props: GeneralFormProps) {
    const [visible, setVisible] = useState(false);
    const [description, setDescription] = useState('');

    return (
        <>
            <Stack spacing={10} style={{margin: 16}}>
                <Text>{props.formTitle}</Text>
                <Formik initialValues={props.initialValues} onSubmit={props.onSubmit}>
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View>
                            {props.formElements.map(element => {
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
                                                          setDescription(element.description ? element.description : '');
                                                      }} icon={props => <Icon name="information" {...props} />} {...props} />
                                                  )} />
                            })}
                            <Button onPress={handleSubmit} title={props.submitText} />
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