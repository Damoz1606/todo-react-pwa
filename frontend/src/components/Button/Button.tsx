import React from 'react'
import './Button.css';

interface Props {
    eventClicked: () => void;
}

function Button(props: Props) {

    return (
        <>
            <button className="button is-rounded is-danger" onClick={props.eventClicked}><span className="material-icons">delete</span></button>
        </>
    )
}

export default Button
