import {FormikValues} from "formik";
import {searchForBooks} from "../../services/book-service";
import {FormElement, GeneralForm} from "../form/GeneralForm";

export function SearchForm(props) {
    function onFormSubmit(values: FormikValues) {
        searchForBooks(values).then(searchResults => {
            if (searchResults) {
                props.setBooks(searchResults.books);
            }
        });
    }

    return (
        <GeneralForm formTitle="Search For Book"
                     initialValues={{title: '', author: '', subject: '', place: '', person: '', publisher: ''}}
                     onSubmit={onFormSubmit}
                     formElements={formElements}
                     submitText="Search" />
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
