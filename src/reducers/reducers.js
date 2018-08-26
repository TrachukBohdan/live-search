import { combineReducers } from 'redux';
import * as actionTypes  from '../constants/actionTypes';
import initialState from '../intialState';

function booksReducer(state = initialState, action) {
    if (actionTypes.RECEIVE_SEARCHED_BOOKS === action.type) {
        return Object.assign({}, state, {books: action.books});
    }
    return state;
}

function bookDetailsReducer(state = initialState, action) {
    return state;
}

function selectedFilterReducer(state = initialState, action) {
    if (actionTypes.CHANGE_SEARCH_FILTER === action.type) {
        return Object.assign({}, state, {selectedFilter: action.filter});
    }
    return state;
}

function isLoadingReducer(state = initialState, action) {
    if (actionTypes.SEARCH_BOOKS_REQUEST === action.type) {
        return Object.assign({}, state, {isLoading: true});
    }

    if (actionTypes.RECEIVE_SEARCHED_BOOKS === action.type) {
        return Object.assign({}, state, {isLoading: false});
    }

    return state;
}

function searchQueryReducer(state = initialState, action) {
    console.log(action.query);
    if (actionTypes.SEARCH_BOOKS_REQUEST === action.type) {
        return Object.assign({}, state, {searchQuery: action.query});
    }
    return state;
}

function errorMessageReducer(state = initialState, action) {
    if (actionTypes.THROW_ERROR === action.type) {
        return Object.assign({}, state, {errorMessage: action.message});
    }

    if (actionTypes.HIDE_ERROR === action.type) {
        return Object.assign({}, state, {errorMessage: ''});
    }

    return state;
}

function infoMessageReducer(state = initialState, action) {
    if (actionTypes.THROW_INFO_MESSAGE === action.type) {
        return Object.assign({}, state, {infoMessage: action.message});
    }

    if (actionTypes.HIDE_INFO_MESSAGE === action.type) {
        return Object.assign({}, state, {infoMessage: ''});
    }

    return state;
}

const reducers = combineReducers({
    booksReducer,
    bookDetailsReducer,
    selectedFilterReducer,
    isLoadingReducer,
    searchQueryReducer,
    errorMessageReducer,
    infoMessageReducer
});

export default reducers;