import {BookDto} from "./book-dto";

export class SearchDto {
    start: number;
    numFound: number;
    books: BookDto[];
}
