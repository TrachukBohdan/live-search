import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg } from 'reactstrap';

class BookCoverImg extends Component {

    render() {
        console.log(this.props.imgCoverUrl);
        return (
            <Card>
                <CardImg src={this.props.imgCoverUrl} />
            </Card>
        );
    }
}

BookCoverImg.defaultProps = {
    imgCoverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
};

BookCoverImg.propTypes = {
    imgCoverUrl: PropTypes.string
};

export default BookCoverImg;