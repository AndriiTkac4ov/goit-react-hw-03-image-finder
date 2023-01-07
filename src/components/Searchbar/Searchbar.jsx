import { Component } from "react";
import PropTypes from 'prop-types';
import { SearchBar, SearchForm, SearchForm_button, SearchForm_buttonLabel, SearchForm_input } from "./Searchbar.styled";

export class Searchbar extends Component {
    // static propTypes = {
    //     onSubmit: PropTypes.func.isRequired,
    // };
    
    state = {
        // name: "",
        // number: "",
    }

    handleInput = (event) => {
        const { name, value } = event.currentTarget;  
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state, this.reset);
    }

    reset = () => {
        this.setState({
            name: "",
            number: "",
        })
    }

    render() {
        // const { name, number } = this.state;

        return (
            <SearchBar>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchForm_button type="submit">
                        <SearchForm_buttonLabel>Search</SearchForm_buttonLabel>
                    </SearchForm_button>

                    <SearchForm_input
                        type="text"
                        name="query"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleInput}
                    />
                </SearchForm>
            </SearchBar>
        )
    }
}
