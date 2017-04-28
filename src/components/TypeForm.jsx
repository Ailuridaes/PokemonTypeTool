import React from 'react';
import { TYPES } from '../values.js';
import TypeSelector from './TypeSelector';

class TypeForm extends React.Component {
    constructor(props) {
        super(props);

        this.setType1 = this.setType1.bind(this);
        this.setType2 = this.setType2.bind(this);
    }

    setType1(type) {
        this.props.onSubmit([type, this.props.type2]);
    }

    setType2(type) {
        this.props.onSubmit([this.props.type1, type]);
    }

    render() {
        return (
            <form>
                <TypeSelector value={this.props.type1} types={TYPES} setType={this.setType1} />
                <TypeSelector value={this.props.type2} types={['NONE', ...TYPES]} setType={this.setType2} />
            </form>
        );
    }
}

export default TypeForm;