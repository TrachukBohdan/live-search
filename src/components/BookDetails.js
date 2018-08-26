import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

class BookDetails extends Component {

    render() {

        let book = this.props.book;
        console.log(book);

        return (
            <Card>
                <CardBody>
                    <Link className={"btn btn-success"} to="/"> Back to search </Link>
                    <br />
                    <br />
                    <ListGroup>
                        <ListGroupItem>
                            <b>Title:</b> {book.title}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Authors:</b> {book.authors}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Publisher:</b> {book.publisher}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Publish date:</b> {book.publishedDate}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Price:</b> {book.price} {book.priceCurrency}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Identifiers: </b>
                            {
                                book.identifiers.map((item) => {
                                    return `${item.type}: ${item.identifier}, `;
                                })
                            }
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Language: </b> {book.language}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Pages: </b> {book.pageCount}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Description: </b> {book.description}
                        </ListGroupItem>


                    </ListGroup>

                </CardBody>
            </Card>
        );
    }
}

export default BookDetails;