import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton() {
        const text = messageRef.current.value;
        alert(`Text in input ${text}`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{ background: '#C28CAE', padding: '30px' }}>
            <p onMouseOver={() => { console.log("OnMouseOver") }}> Hola, {name} </p>
            <button onClick={() => { console.log('boton 1 pulsado') }}> Botón uno </button>
            <button onClick={pressButton}> Botón dos </button>
            <button onClick={() => { pressButtonParams("Hello") }}> Botón 3 </button>
            <input
                placeholder='Insert a text'
                onFocus={() => { console.log("Input focuse d") }}
                onChange={(e) => { console.log("input changed", e.target.value) }}
                onCopy={() => { console.log("copied text frmo input") }}
                ref={messageRef}>

            </input>
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{ background: 'lightgrey', marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'></input>
                    <button type='sumbit'> Update Name </button>
                </form>

            </div>
        </div>
    );
}

export default Child;
