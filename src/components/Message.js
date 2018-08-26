import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button } from 'reactstrap';

class Message extends Component {

    render() {
        let classes = 'alert alert-info';
        if (this.props.type === 'error') {
            classes = 'alert alert-danger'
        }

        return (
            <Alert className={classes}>
                {this.props.children}
                <button
                    type="button"
                    className={"close"}
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={this.props.hideMessage}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </Alert>
        );
    }
}

export default Message;