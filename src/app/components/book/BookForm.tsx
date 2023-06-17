import {Book} from "../../model/book";
import {FormElement, GeneralForm} from "../form/GeneralForm";
import {FormikValues} from "formik";

interface AddBookProps {
    book: Book
}

export function BookForm(props: AddBookProps) {
    function onFormSubmit(values: FormikValues) {
        console.log(values);
    }

    return(
        <GeneralForm formTitle="Add Book"
                     initialValues={{}}
                     onSubmit={onFormSubmit}
                     formElements={formElements}
                     submitText="Add Book" />
    );
}

function mapBookToFormValues() {

}

function mapFormValuesToBook() {

}

const formElements: FormElement[] = [
    {
        name: 'title',
        description: 'Title Description',
        required: true
    },
    {
        name: 'author',
        description: 'Author Description',
        required: true
    },
    {
        name: 'publisher',
        description: 'Publisher Description'
    },
    {
        name: 'level',
        description: 'Level Description',
        type: 'select',
        options: ['1', '2', '3']
    }
];