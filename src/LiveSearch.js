import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from 'react-emotion';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Input,
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    Media,
    Button
} from 'reactstrap';

import Loader from 'react-spinners/FadeLoader';

class LiveSearch extends Component {

    constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false
        };
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }


    render() {

        const override = css`
            display: block;
            margin: 0 auto;
            border-color: red;
        `;

        return (
            <div>
                <br/>
                <Container>
                    <Row>
                        <Col md={{ size: 10, offset: 1 }}>
                            <h3>Live books search</h3>
                            <Card>
                                <CardBody>
                                    <InputGroup>
                                        <Input placeholder={"Search books ..."} />
                                        <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                            <DropdownToggle className={"dropdown-toggle btn btn-info"} caret>
                                                Both
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>For sale</DropdownItem>
                                                <DropdownItem>Not fro sale</DropdownItem>
                                                <DropdownItem>Both</DropdownItem>
                                            </DropdownMenu>
                                        </InputGroupButtonDropdown>
                                    </InputGroup>
                                </CardBody>
                            </Card>
                            <br />

                            <div className='sweet-loading'>
                                <Loader
                                    className={override}
                                    sizeUnit={"px"}
                                    size={150}
                                    color={'#8d96bc'}
                                    loading={this.state.loading}
                                />
                            </div>

                            <Media>
                                <Media left top style={{paddingRight: '10px'}} href="#">
                                    <Media style={{width: '128px'}} object src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Generic placeholder image" />
                                </Media>
                                <Media body>
                                    <Media heading> Top aligned media </Media>
                                    <div>
                                        <b>Author: </b> Test author <br />
                                        <b>Description: </b> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </div>
                                    <br />
                                    <div>
                                        <Button className={"btn btn-info"}>Read more</Button>
                                    </div>
                                </Media>
                            </Media>
                            <hr />

                            <Media>
                                <Media left top style={{paddingRight: '10px'}} href="#">
                                    <Media style={{width: '128px'}} object src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Generic placeholder image" />
                                </Media>
                                <Media body>
                                    <Media heading> Top aligned media </Media>
                                    <div>
                                        <b>Author: </b> Test author <br />
                                        <b>Description: </b> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </div>
                                    <br />
                                    <div>
                                        <Button className={"btn btn-info"}>Read more</Button>
                                    </div>
                                </Media>
                            </Media>
                            <hr />


                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LiveSearch;
