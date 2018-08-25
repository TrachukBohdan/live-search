import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Card, CardBody, Media } from 'reactstrap';

class BookPreview extends Component {

    constructor(props) {
        super(props);
    }

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
                                    <Link className={"btn btn-success"} to="/book"> Read more </Link>
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

BookPreview.defaultProps = {
    imgCoverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    title: 'a title of a book',
    author: 'an author of a book',
    description: 'description'
};


BookPreview.propTypes = {
    imgCoverUrl: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
};

export default BookPreview;