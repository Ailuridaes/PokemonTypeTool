import React from 'react';
import { TYPES } from '../values.js';
import TypeSelector from './TypeSelector';

class TypeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type1: 'BUG',
            type2: 'NONE'
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setType1 = this.setType1.bind(this);
        this.setType2 = this.setType2.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit([this.state.type1, this.state.type2]);
    }

    setType1(type) {
        this.setState({ type1: type });
    }

    setType2(type) {
        this.setState({ type2: type });
    }

    render() {
        return (
            <form>
                <TypeSelector types={TYPES} setType={this.setType1} />
                <TypeSelector types={['NONE', ...TYPES]} setType={this.setType2} />
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default TypeForm;