import booksApi from '../api/booksApi';
import * as actionTypes  from '../constants/actionTypes';

export default {

    createSearchBooksRequestAction(bookQuery) {
        return {
            type: actionTypes.SEARCH_BOOKS_REQUEST,
            query: bookQuery
        }
    },

    createReceiveSearchedBooksAction(booksJson) {
        let books = [];

        if (booksJson.totalItems > 0) {
            for (let bookItem of booksJson.items) {
                books.push({
                    title: bookItem.volumeInfo.title,
                    description: bookItem.volumeInfo.description ? bookItem.volumeInfo.description.substr(1, 200) + '...' : '',
                    author: '',
                    imgCoverUrl: 'imageLinks' in bookItem.volumeInfo ? bookItem.volumeInfo.imageLinks.smallThumbnail : null,
                });
            }
        }

        return {
            type: actionTypes.RECEIVE_SEARCHED_BOOKS,
            books: books
        }
    },

    createBookDetailsRequestAction(bookId) {
        return {
            type: actionTypes.BOOK_DETAILS_REQUEST,
            bookId: bookId
        }
    },

    createReceiveBookDetailsAction(bookDetails) {
        return {
            type: actionTypes.RECEIVE_BOOK_DETAILS,
            bookDetails: bookDetails
        }
    },

    createChangeSearchFilterAction(searchFilter) {
        return {
            type: actionTypes.CHANGE_SEARCH_FILTER,
            filter: searchFilter
        }
    },

    createThrowErrorAction(errorMessage) {
        return {
            type: actionTypes.THROW_ERROR,
            message: errorMessage
        }
    },

    createHideErrorAction() {
        return {
            type: actionTypes.HIDE_ERROR
        }
    },

    createThrowInfoMessageAction(infoMessage) {
        return {
            type: actionTypes.THROW_INFO_MESSAGE,
            message: infoMessage
        }
    },

    createHideInfoMessageAction() {
        return {
            type: actionTypes.HIDE_INFO_MESSAGE
        }
    },

    createSearchBooksAction(bookQuery, filter) {
        return dispatch => {

            dispatch(this.createChangeSearchFilterAction(filter));
            dispatch(this.createHideErrorAction());
            dispatch(this.createHideInfoMessageAction());

            if(!bookQuery) { return; }

            dispatch(this.createSearchBooksRequestAction(bookQuery));

            return booksApi
                .searchBooks(bookQuery, filter)
                .then(response => response.json())
                .then(json => {
                    dispatch(this.createReceiveSearchedBooksAction(json));
                    console.log(json);
                    if(json.totalItems === 0) {
                        dispatch(this.createThrowInfoMessageAction(
                            'Books ware not found'
                        ));
                    }
                })
        }
    }
};
