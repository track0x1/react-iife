import React from 'react';

export default class IIFE extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.fn && typeof this.props.fn === 'function') {
            this.props.fn.call(this.refs.child);
        }
    }

    render() {
        return React.cloneElement(this.props.children, { ref: 'child' });
    }
}

IIFE.propTypes = {
    children: React.PropTypes.node,
    fn: React.PropTypes.func.isRequired
};
