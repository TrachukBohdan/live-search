import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Input,
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
} from 'reactstrap';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {

        let filters = [];

        for (let filterKey in this.props.searchFilters) {
            filters.push(
                <DropdownItem key={filterKey}
                              onClick={() => this.props.changeFilter(filterKey)}>
                    {this.props.searchFilters[filterKey]}
                </DropdownItem>
            );
        }

        return (
            <Card>
                <CardBody>
                    <h4>Live books search</h4>
                    <InputGroup>
                        <Input placeholder="Search books ..." />
                        <InputGroupButtonDropdown addonType="append"
                                                  isOpen={this.state.dropdownOpen}
                                                  toggle={(e) => this.toggleDropDown(e)}>

                            <DropdownToggle className={"dropdown-toggle btn btn-success"} caret>
                                {this.props.searchFilters[this.props.selectedFilter]}
                            </DropdownToggle>

                            <DropdownMenu> {filters} </DropdownMenu>
                        </InputGroupButtonDropdown>
                    </InputGroup>
                </CardBody>
            </Card>
        );
    }
}

export default SearchBar;