import React, { Component } from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';
import FadeLoader from 'react-spinners/FadeLoader';

class Loader extends Component {

    render() {
        const override = css`
            display: block;
            margin: 0 auto;
            border-color: red;
        `;

        let content = this.props.children;

        if (this.props.loading) {
            content = (
                <div className='sweet-loading'>
                    <FadeLoader
                        className={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#3bbc45'}
                        loading={true}
                    />
                </div>
            );
        }

        return (<div> {content} </div>);
    }
}

Loader.defaultProps = {
    loading: false
};

Loader.propTypes = {
    loading: PropTypes.bool
};

export default Loader;