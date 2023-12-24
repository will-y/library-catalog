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
        description: 'Search by full or partial title'
    },
    {
        name: 'author',
        description: 'Search by author first or last name'
    },
    {
        name: 'subject',
        description: 'Search by subject of book'
    },
    {
        name: 'place',
        description: 'Search by locations in the book'
    },
    {
        name: 'person',
        description: 'Search by characters in the book'
    },
    {
        name: 'publisher',
        description: 'Search by publisher'
    }
];
