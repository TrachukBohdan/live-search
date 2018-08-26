import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import BookPreview from '../components/BookPreview';
import SearchBar from '../components/SearchBar';
import Message from '../components/Message';
import { Container, Row, Col } from 'reactstrap';

import * as searchFilters from '../constants/searchFilters';
import actionFactory from '../actions/actionFactory';

class LiveSearchPage extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.filters = {
            [searchFilters.FILTER_FOR_SALE]: 'For sale',
            [searchFilters.FILTER_NOT_FOR_SALE]: 'Not for sale',
            [searchFilters.FILTER_BOTH]: 'Both'
        };
    }

    changeFilter(filterKey) {
        let action = actionFactory.createSearchBooksAction(
            this.props.searchQuery,
            filterKey
        );

        this.props.dispatch(action);
    }

    hideErrorMessage() {
        let action = actionFactory.createHideErrorAction();
        this.props.dispatch(action);
    }

    hideInfoMessage() {
        let action = actionFactory.createHideInfoMessageAction();
        this.props.dispatch(action);
    }

    changeSearchQuery(e) {

        clearTimeout(this.timer);
        let queryString = e.target.value;
        let selectedFilter =  this.props.selectedFilter;
        this.timer = setTimeout(() => {
            let action = actionFactory.createSearchBooksAction(
                queryString,
                selectedFilter
            );
            this.props.dispatch(action);
        }, 1000);
    }

    componentWillMount() {

        if (this.props.books.length !== 0) {
            return;
        }

        let action = actionFactory.createThrowInfoMessageAction(
            'Start typing to find what you need'
        );
        this.props.dispatch(action);
    }

    render() {

        return (
            <div>
                <br/>
                <Container>
                    <Row>
                        <Col md={{ size: 12 }}>
                            <SearchBar
                                searchFilters={this.filters}
                                selectedFilter={this.props.selectedFilter}
                                searchQuery={this.props.searchQuery}
                                changeSearchQuery={(e) => this.changeSearchQuery(e)}
                                changeFilter={(filterKey) => this.changeFilter(filterKey)}
                            />

                            <br />
                            {
                                this.props.errorMessage
                                &&
                                <Message type={"error"} hideMessage={() => this.hideErrorMessage()} >
                                    {this.props.errorMessage}
                                </Message>
                            }

                            {
                                this.props.infoMessage
                                &&
                                <Message type={"info"} hideMessage={() => this.hideInfoMessage()} >
                                    {this.props.infoMessage}
                                </Message>
                            }


                            <Loader loading={this.props.isLoading}>
                                {
                                    this.props.books.map((book, i) =>
                                        <BookPreview
                                            title={book.title}
                                            description={book.description}
                                            author={book.author}
                                            imgCoverUrl={book.imgCoverUrl}
                                            key={i}
                                        />
                                    )
                                }
                            </Loader>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {

    console.log(state.searchQueryReducer.searchQuery);

    return {
        books: state.booksReducer.books,
        selectedFilter: state.selectedFilterReducer.selectedFilter,
        isLoading: state.isLoadingReducer.isLoading,
        searchQuery: state.searchQueryReducer.searchQuery,
        errorMessage: state.errorMessageReducer.errorMessage,
        infoMessage: state.infoMessageReducer.infoMessage,
    };
}

export default connect(mapStateToProps)(LiveSearchPage);
