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
            dropdownOpen: false,
            searchQuery: this.props.searchQuery
        };
    }

    toggleDropDown() {
        this.setState({dropdownOpen: !this.state.dropdownOpen});
    }

    handleChangeQuery(e) {
        this.setState({searchQuery: e.target.value});
        this.props.changeSearchQuery(e);
    }

    render() {
        let filters = [];
        for (let filterKey in this.props.searchFilters) {
            if (!this.props.searchFilters.hasOwnProperty(filterKey)) {
                continue;
            }

            filters.push(
                <DropdownItem
                    key={filterKey}
                    onClick={() => this.props.changeFilter(filterKey)}
                >
                    {this.props.searchFilters[filterKey]}
                </DropdownItem>
            );
        }

        return (
            <Card>
                <CardBody>
                    <h4>Live books search</h4>

                    <InputGroup>
                        <Input
                            type={"text"}
                            placeholder="Search books ..."
                            onChange={(e) => this.handleChangeQuery(e) }
                            value={this.state.searchQuery}
                        />

                        <InputGroupButtonDropdown
                            addonType="append"
                            isOpen={this.state.dropdownOpen}
                            toggle={() => this.toggleDropDown()}
                        >

                            <DropdownToggle className={"dropdown-toggle btn btn-success"} caret>
                                {this.props.searchFilters[this.props.selectedFilter]}
                            </DropdownToggle>

                            <DropdownMenu>
                                {filters}
                            </DropdownMenu>

                        </InputGroupButtonDropdown>

                    </InputGroup>

                </CardBody>
            </Card>
        );
    }
}

export default SearchBar;