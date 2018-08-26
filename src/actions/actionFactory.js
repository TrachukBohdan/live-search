import booksApi from '../api/booksApi';
import * as actionTypes  from '../constants/actionTypes';
import convertGoogleBook from '../helpers/covertGoogleBook';

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
                books.push(convertGoogleBook.convertToBookPreview(bookItem));
            }
        }

        return {
            type: actionTypes.RECEIVE_SEARCHED_BOOKS,
            books: books
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
                        dispatch(this.createThrowInfoMessageAction('Books ware not found'));
                    }
                })
        }
    }
};
