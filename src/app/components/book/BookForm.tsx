import {Book} from "../../model/book";
import {FormElement, GeneralForm} from "../form/GeneralForm";
import {FormikValues} from "formik";

interface AddBookProps {
    book: Book
}

export function BookForm(props: AddBookProps) {
    function onFormSubmit(values: FormikValues) {

    }

    return(
        <GeneralForm formTitle="Add Book"
                     initialValues={{}}
                     onSubmit={onFormSubmit}
                     formElements={formElements}
                     submitText="Add Book" />
    );
}

const formElements: FormElement[] = [
    {
        name: 'title',
        description: 'Title Description'
    },
    {
        name: 'author',
        description: 'Author Description'
    },
    {
        name: 'publisher',
        description: 'Publisher Description'
    },
    {
        name: 'level',
        description: 'Level Description'
    }
];