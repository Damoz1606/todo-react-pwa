import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './InputStyle.css';

interface Props {
    eventSubmit: (args:any) => void
}

function Input(props: Props) {

    const [text, settext] = useState("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        settext(event.target.value);
    }

    const handleSubmit = (form: FormEvent) => {
        form.preventDefault();
        props.eventSubmit(text);
        settext("");
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control" type="task" onChange={handleChange} value={text} />
                    <button type="submit" className="btn btn-primary">
                        <span className="material-icons">add</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Input
