import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import BookCoverImg from "../components/BookCoverImg";
import BookDetails from "../components/BookDetails";
import booksApi from '../api/booksApi';
import convertGoogleBook from '../helpers/covertGoogleBook';
import Loader from '../components/Loader';

class BookPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            id: '',
            authors: '',
            categories: '',
            description: '',
            identifiers: [],
            imgCoverUrl: '',
            language: '',
            pageCount: '',
            price: '',
            priceCurrency: '',
            publishedDate: '',
            publisher: '',
            title: ''
        };
    }

    componentWillMount() {
        this.setState({isLoading: true});

        booksApi.getBook(this.props.match.params.id)
            .then(response => response.json())
            .then(book => {
                let bookObject = convertGoogleBook.convertToBookDetails(book);
                this.setState(Object.assign({}, bookObject, {isLoading: false}));
            })
    }

    render() {

        console.log(this.props.match.params.id);

        return (
            <div>
                <br/>
                <Loader loading={this.state.isLoading}>
                    <Container>
                        <Row>
                            <Col md={{ size: 4 }}>
                                <BookCoverImg imgCoverUrl={this.state.imgCoverUrl} />
                            </Col>

                            <Col md={{ size: 8 }}>
                                <BookDetails book={this.state} />
                            </Col>
                        </Row>
                    </Container>
                </Loader>
            </div>
        );
    }
}

export default BookPage;