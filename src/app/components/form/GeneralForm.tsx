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
import SelectDropdown from "react-native-select-dropdown";

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
    type?: string,
    options?: string[],
    required?: boolean
}

export function GeneralForm(props: GeneralFormProps) {
    const [visible, setVisible] = useState(false);
    const [description, setDescription] = useState('');

    return (
        <>
            <Stack spacing={10} style={{margin: 16}}>
                <Text>{props.formTitle}</Text>
                <Formik initialValues={props.initialValues} onSubmit={props.onSubmit} >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View>
                            {props.formElements.map(element => {
                                return (
                                    <View key={element.name}>
                                        {element.type === 'select' ?
                                            <SelectDropdown data={element.options ? element.options : []}
                                                            onSelect={handleChange(element.name)}
                                                            buttonStyle={styles.dropdown}
                                                            buttonTextStyle={styles.dropdownText}
                                                            defaultButtonText="Reading Level"
                                                            key={element.name} /> :
                                            <TextInput variant='outlined'
                                                       label={capitalize(element.name)}
                                                       onChangeText={handleChange(element.name)}
                                                       onBlur={handleBlur(element.name)}
                                                       value={values[element.name]}
                                                       style={styles.input}
                                                       trailing={props => element.description ? (
                                                           <IconButton onTouchStart={() => {
                                                               setVisible(true);
                                                               // @ts-ignore
                                                               setDescription(element.description);
                                                           }} icon={props => <Icon name="information" {...props} />} {...props} />
                                                       ) : <></>} />
                                        }
                                        {element.required ? <Icon name="asterisk" style={styles.requiredIcon}/> : <></>}
                                    </View>
                                );
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
    },
    dropdown: {
        width: '100%',
        minHeight: 56,
        backgroundColor: '#FFF',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#8d8d8d',
        marginBottom: 10
    },
    dropdownText: {
        textAlign: "left"
    },
    requiredIcon: {
        position: "absolute",
        right: 2,
        top: 2,
        color: "red"
    }
});