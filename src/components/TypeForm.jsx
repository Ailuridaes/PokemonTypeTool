import React from 'react';
import { TYPES } from '../values.js';
import TypeSelector from './TypeSelector';

class TypeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type1: '',
            type2: ''
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // validate that the first type is selected
        if (this.state.type1.length > 0) {
            // send type selection to callback provided by SetTypes container
            this.props.onSubmit([this.state.type1, this.state.type2]);
        // clear form
        } else {
            this.setState({
                error: 'Please select a type!'
            });
        }
    }

    render() {
        return (
            <form>
                <TypeSelector types={TYPES} />
                <TypeSelector types={TYPES} />
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default TypeForm;