import React, { ChangeEvent, useEffect, useState } from 'react'
import { ToDo } from '../../interfaces/todo'
import './Task.css'

interface Props {
    task: ToDo,
    eventDelete: (args: any) => void,
    eventUpdate: (args: any) => void,
    eventNotification: () => void
}

function Task(props: Props) {

    useEffect(() => {
        
    }, [])

    const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.eventUpdate({... props.task, done: event.target.checked});
    }

    const onDeleteClicked = () => {
        props.eventDelete(props.task._id);
    }

    return (
        <div className="p-3">
            <div className="card task-card">
                <div className="card-content p-4">
                    <div className="task-container">
                        <div className='task-text'>
                            <p className={props.task.done ? "strike" : ""}>{ props.task.description }</p>
                        </div>
                        <div className="task-buttons-container">
                            <div className="task-delete hover-hidden">
                                <a><span className="material-icons" onClick={onDeleteClicked}>delete</span></a>
                            </div>
                            <div className="task-notification">
                                <span className="material-icons" onClick={props.eventNotification}>notifications</span>
                            </div>
                            <div className="task-checkbox">
                                <input type="checkbox" name="done" onChange={onCheckboxChange} checked={props.task.done} />
                                <span className="checkbox"></span>
                                <span className="material-icons icon-check">done</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
