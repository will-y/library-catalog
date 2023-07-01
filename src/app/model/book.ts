export class Book {
    // Fields from database
    authorKey: string[];
    authorName: string[];
    coverURL: string;
    firstPublishYear: number;
    isbn: string[];
    key: string;
    // characters
    person: string[];
    personKey: string[];
    place: string[];
    placeKey: string[];
    ratingsAverage: number;
    ratingsCount: number;
    // tags kinda
    subject: string[];
    subjectKey: string[];
    title: string;
    publishers: string[];

    // Custom Fields
    readingLevel: number;
}
