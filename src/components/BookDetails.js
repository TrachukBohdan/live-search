import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

class BookDetails extends Component {

    render() {
        return (
            <Card>
                <CardBody>
                    <Link className={"btn btn-success"} to="/"> Back to search </Link>
                    <br />
                    <br />
                    <ListGroup>
                        <ListGroupItem>
                            <b>Title:</b> {this.props.title}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Author:</b> {this.props.author}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Price:</b> {this.props.price}
                        </ListGroupItem>

                        <ListGroupItem>
                            <b>Description: </b> {this.props.description}
                        </ListGroupItem>

                    </ListGroup>

                </CardBody>
            </Card>
        );
    }
}

BookDetails.defaultProps = {
    title: 'a title of a book',
    author: 'an author of a book',
    description: 'description',
    price: '20.20'
};

BookDetails.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string
};

export default BookDetails;