import fetch from 'cross-fetch';
import * as searchFilters from '../constants/searchFilters';

let apiKey = process.env.REACT_APP_GOOGLE_BOOK_API_KEY;
let baseVolumesUrl = 'https://www.googleapis.com/books/v1';

export default {

    searchBooks(bookQuery, filter) {
        let filters = '';

        if (searchFilters.FILTER_NOT_FOR_SALE === filter)
            filters += '&filter=free-ebooks';

        if (searchFilters.FILTER_FOR_SALE === filter)
            filters += '&filter=paid-ebooks';

        console.log(filters);

        bookQuery = encodeURI(bookQuery);
        return fetch(`${baseVolumesUrl}/volumes?q=${bookQuery}${filters}&key=${apiKey}`);
    },

    getBook(bookId) {
        return fetch(`${baseVolumesUrl}/volumes/${bookId}?key=${apiKey}`)
    }

}