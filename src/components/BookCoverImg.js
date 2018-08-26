import React, { Component } from 'react';
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


export default BookCoverImg;