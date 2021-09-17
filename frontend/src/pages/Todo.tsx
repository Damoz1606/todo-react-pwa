import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Loading from '../components/Loading/Loading'
import Task from '../components/Task/Task'
import { ToDo } from '../interfaces/todo'
import * as todoService from '../services/todo.service';

function Todo() {

    const { loading, error, data } = useQuery(todoService.GET_TODOs)
    const [postTODO] = useMutation(todoService.POST_TODO)
    const [putTODO] = useMutation(todoService.PUT_TODO)
    const [deleteTODO] = useMutation(todoService.DELETE_TODO)
    const [deleteTODOs] = useMutation(todoService.DELETE_TODOs)

    const [canNotify, setcanNotify] = useState<boolean>(true)
    const [todos, settodos] = useState<ToDo[]>([])

    useEffect(() => {
        getTODOs();
        checkNotificationAvailable();
    }, [data])

    const getTODOs = () => {
        if (!loading) {
            settodos(data.getTodos);
        }
    }

    const onSave = async (text: string) => {
        if (text && text !== "") {
            const { data } = await postTODO({ variables: { description: text } });
            settodos([...todos, data.postTodo])
        }
    }

    const onUpdate = async (todo: ToDo) => {
        if (todo.description && todo.description !== "") {
            await putTODO({ variables: { id: todo._id, description: todo.description, done: todo.done } });
        }
    }

    const onDeleteTODO = async (id: string) => {
        const {data} = await deleteTODO({ variables: { id: id } });
        const updateArray = todos.filter((element: ToDo) => element._id !== data.deleteTodo._id)
        settodos(updateArray);
    }

    const onDeleteTODOs = async () => {
        await deleteTODOs();
        settodos([])
    }

    const checkNotificationAvailable = () => {
        if(("Notification" in window)) {
            Notification.requestPermission();
        } else {
            setcanNotify(false);
        }
    }

    const onNotification = async () => {
        if(canNotify) {
            const registration =  await navigator.serviceWorker.getRegistration();

            if(registration) {
                registration.showNotification("Notification example")
            }
        }
    }

    if (loading) return (<div className="is-flex is-justify-content-center p-4"><Loading /></div>)
    if (error) return <p>Error...</p>

    return (
        <div className="my-6">
            <div className="px-3">
                <Input eventSubmit={onSave}/>
            </div>
            <div className="my-3">
                {
                    todos.map((element: any, key: any) => {
                        return <Task eventNotification={onNotification} task={element}  eventDelete={onDeleteTODO} eventUpdate={onUpdate} key={key}/>;
                    })
                }
            </div>
            <div className="float float-bottom float-mobile">
                <Button eventClicked={onDeleteTODOs}/>
            </div>
        </div>
    )
}

export default Todo
