import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import BookCoverImg from "./components/BookCoverImg";
import BookDetails from "./components/BookDetails";

class BookPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/>
                <Container>
                    <Row>
                        <Col md={{ size: 4 }}>
                            <BookCoverImg />
                        </Col>

                        <Col md={{ size: 8 }}>
                            <BookDetails/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BookPage;