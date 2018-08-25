import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './components/Loader';
import BookPreview from './components/BookPreview';
import SearchBar from './components/SearchBar';
import { Container, Row, Col } from 'reactstrap';

class LiveSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            selectedFilter: 'FILTER_BOTH'
        };

        this.searchFilters = {
            FILTER_FOR_SALE: 'For sale',
            FILTER_NOT_FOR_SALE: 'Not for sale',
            FILTER_BOTH: 'Both',
        };

        setTimeout(() => {this.setState({isLoading: false})}, 1000);
    }

    changeFilter(filterKey) {
        this.setState({
            selectedFilter: filterKey
        });
    }

    render() {

        return (
            <div>
                <br/>
                <Container>
                    <Row>
                        <Col md={{ size: 12 }}>

                            <SearchBar searchFilters={this.searchFilters}
                                       selectedFilter={this.state.selectedFilter}
                                       changeFilter={(filterKey) => this.changeFilter(filterKey)} />
                            <br />

                            <Loader loading={this.state.isLoading}>
                                <BookPreview/>
                                <BookPreview/>
                            </Loader>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LiveSearch;
