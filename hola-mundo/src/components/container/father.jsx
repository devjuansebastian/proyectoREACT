import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setname] = useState('Juan');

    function updateName(newName){
        setname(newName);
    }

    function showMessage(text) {
        alert(`Message recieved ${text}`)
    }

    return (
        <div style={{background : '#DEC4A1', padding:'10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
