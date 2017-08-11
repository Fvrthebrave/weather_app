import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// This is a container because it needs to make an API call whenever a user 
// searches!!!!.

class SearchBar extends Component {
    
    // Initialize the state
    constructor(props){
        super(props);
    
        this.state = { term: '' };
        
        // Bind this so that we can reference 'this' within our function
        // onInputChange *******************************************************
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    // Updates the state of the component when the user enters input.
    onInputChange(event) {
        this.setState ({ term: event.target.value });
    }
    
    // Stop the form from submitting.
    onFormSubmit(event) {
        event.preventDefault();   
        
        if(this.state.term !== ''){
            // Need to go and fetch weather data
            this.props.fetchWeather(this.state.term);
        }
        // Clears the input
        this.setState({ term: '' });
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities" 
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);