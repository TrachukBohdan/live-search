import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, Media } from 'reactstrap';

class BookPreview extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <Media>
                            <Media left top style={{paddingRight: '10px'}} href="#">
                                <Media style={{width: '128px'}} object src={this.props.imgCoverUrl} alt={this.props.title} />
                            </Media>

                            <Media body>
                                <Media heading>{this.props.title}</Media>
                                <div>
                                    <b>Author: </b> {this.props.author} <br />
                                    {this.props.description}
                                </div>

                                <br />

                                <div>
                                    <Link className={"btn btn-success"} to={"/book/" + this.props.bookId}> Read more </Link>
                                </div>
                            </Media>
                        </Media>
                    </CardBody>
                </Card>
                <br />
            </div>
        );
    }
}

export default BookPreview;