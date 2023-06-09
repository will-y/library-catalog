import {Book} from "./book";

export class SearchDto {
    start: number;
    numFound: number;
    books: Book[];
}
