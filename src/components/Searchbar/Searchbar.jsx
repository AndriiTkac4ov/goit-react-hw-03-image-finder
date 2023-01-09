import { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchBar, SearchForm, SearchForm_button, SearchForm_buttonLabel, SearchForm_input } from "./Searchbar.styled";

export class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
    };
    
    state = {
        searchQuery: '',
    }

    handleNameChange = event => {
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            toast.warn("Searchign form is empty! Please input some text.");
            return;
        }

        this.props.onSubmitForApp(this.state.searchQuery);
        this.reset();
    }

    reset = () => {
        this.setState({
            searchQuery: '',
        })
    }

    render() {
        const { searchQuery } = this.state;

        return (
            <SearchBar>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchForm_button type="submit">
                        <SearchForm_buttonLabel>Search</SearchForm_buttonLabel>
                    </SearchForm_button>

                    <SearchForm_input
                        type="text"
                        name="searchQuery"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchQuery}
                        onChange={this.handleNameChange}
                    />
                </SearchForm>
            </SearchBar>
        )
    }
}
