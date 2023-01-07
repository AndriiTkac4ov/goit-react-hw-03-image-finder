import { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchBar, SearchForm, SearchForm_button, SearchForm_buttonLabel, SearchForm_input } from "./Searchbar.styled";

export class Searchbar extends Component {
    // static propTypes = {
    //     onSubmit: PropTypes.func.isRequired,
    // };
    
    state = {
        queryName: '',
    }

    handleNameChange = event => {
        this.setState({ queryName: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.queryName.trim() === '') {
            toast.warn("Searchign form is empty! Please input some text.");
            return;
        }

        this.props.onSubmitForApp(this.state.queryName);
        this.reset();
    }

    reset = () => {
        this.setState({
            queryName: '',
        })
    }

    render() {
        // const { queryName } = this.state;

        return (
            <SearchBar>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchForm_button type="submit">
                        <SearchForm_buttonLabel>Search</SearchForm_buttonLabel>
                    </SearchForm_button>

                    <SearchForm_input
                        type="text"
                        name="queryName"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.queryName}
                        onChange={this.handleNameChange}
                    />
                </SearchForm>
            </SearchBar>
        )
    }
}
