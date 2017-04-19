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

        this.setType1 = this.setType1.bind(this);
        this.setType2 = this.setType2.bind(this);
    }

    setType1(type) {
        this.setState({ type1: type });
        this.props.onSubmit([type, this.state.type2]);
    }

    setType2(type) {
        this.setState({ type2: type });
        this.props.onSubmit([this.state.type1, type]);
    }

    render() {
        return (
            <form>
                <TypeSelector types={TYPES} setType={this.setType1} />
                <TypeSelector types={['NONE', ...TYPES]} setType={this.setType2} />
            </form>
        );
    }
}

export default TypeForm;