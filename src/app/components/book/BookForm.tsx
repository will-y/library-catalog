import {Book} from "../../model/book";
import {FormElement, GeneralForm} from "../form/GeneralForm";
import {FormikValues} from "formik";

interface AddBookProps {
    book: Book
}

export function BookForm(props: AddBookProps) {
    function onFormSubmit(values: FormikValues) {
        const book = mapFormValuesToBook(values, props.book);
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
    book.authorName = values.authors;
    book.publishers = [values.publisher];
    book.readingLevel = values.readingLevel;

    return book;
}

const formElements: FormElement[] = [
    {
        name: 'title',
        description: 'Title Description',
        required: true
    },
    {
        name: 'authors',
        description: 'Author Description',
        required: true,
        multi: true
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
