import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    render() {
        const searchText = "Type here to search";
        return (
            <input
                type="text"
                placeholder={searchText}
                className={"search-panel form-control"}
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        );
    }

    onSearchChange = (e)  => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }
}