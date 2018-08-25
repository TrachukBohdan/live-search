import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    Button,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
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
                            <Card>
                                <CardImg src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"} />
                            </Card>
                        </Col>

                        <Col md={{ size: 8 }}>
                            <Card>
                                <CardBody>
                                    <Link className={"btn btn-info"} to="/">
                                        Back to search
                                    </Link>

                                    <br />
                                    <br />
                                    <ListGroup>
                                        <ListGroupItem>
                                            <b>Title:</b> Enjoy a pleasure that has ...
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            <b>Author:</b> John Doe
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            <b>Price:</b> 30$
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            <b>Description: </b>
                                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                                        </ListGroupItem>

                                    </ListGroup>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BookPage;