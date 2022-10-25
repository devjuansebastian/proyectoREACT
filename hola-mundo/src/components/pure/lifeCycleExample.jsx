import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: Se instancia el componente")
    }

    componentWillMount() {
        console.log("Willmouth: Antes del montaje del componente")
    }

    componentDidMount() {
        console.log("DidMount: Va a recibir nuevos props")
    }

    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps: Va a recibir nuevos props")
    }

    shouldComponentUpdate(nextProps, nextState) {
        
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WillUpdate: Justo antes de actualizarse")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("WillUpdate: Justo antes de actualizarse")
    }

    componentWillUnmount() {
        console.log("WillUpdate: Justo antes de desaparecer")
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;