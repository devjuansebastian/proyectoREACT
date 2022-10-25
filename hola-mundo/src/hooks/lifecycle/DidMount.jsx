import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount() {
        console.log("comportamiento antes de que el componente sea anadido al mount")
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log("comportamiento antes de que el componente sea anadido al mount")
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}


