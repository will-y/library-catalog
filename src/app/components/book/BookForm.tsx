import {Book} from "../../model/book";
import {FormElement, GeneralForm} from "../form/GeneralForm";
import {FormikValues} from "formik";
import {saveBook} from "../../services/book-service";

interface AddBookProps {
    book: Book,
    navigation: any
}

export function BookForm(props: AddBookProps) {
    function onFormSubmit(values: FormikValues) {
        const book = mapFormValuesToBook(values, props.book);
        saveBook(book);
        props.navigation.navigate('Library');
    }

    return(
        <GeneralForm formTitle="Add Book"
                     initialValues={mapBookToFormValues(props.book)}
                     onSubmit={onFormSubmit}
                     formElements={formElements}
                     submitText="Add Book" />
    );
}

function mapBookToFormValues(book: Book): any {
    return {
        title: book.title,
        authors: book.authorName ? book.authorName.join(', ') : '',
        publisher: book.publishers && book.publishers.length > 0 ? book.publishers[0] : ''
    }
}

function mapFormValuesToBook(values: FormikValues, book?: Book): Book {
    if (!book) {
        book = new Book();
    }

    book.title = values.title;
    book.authorName = [values.authors];
    book.publishers = [values.publisher];
    book.readingLevel = values.readingLevel;

    return book;
}

const formElements: FormElement[] = [
    {
        name: 'title',
        description: 'Title of the Book',
        required: true
    },
    {
        name: 'authors',
        description: 'Author of the Book',
        required: true,
        multi: true
    },
    {
        name: 'publisher',
        description: 'Publisher of the Book'
    },
    {
        name: 'readingLevel',
        description: 'Book Reading Level',
        type: 'select',
        options: ['1', '2', '3']
    }
];
