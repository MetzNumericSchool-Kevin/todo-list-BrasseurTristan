import {DeleteTaskFunction, EditTaskFunction} from "../components/TypeFunction.ts";
import {useEffect, useState} from "react";

export type TodoItem = {
    id: number,
    description: string
    done: boolean
}

export default function useTodo() {

    const [tasksList, setTasksList] = useState<TodoItem[]>(()=>{
        const datas = localStorage.getItem('Todos')
            return datas ? JSON.parse(datas) : [];
    });

    useEffect(() => {
        localStorage.Todos = JSON.stringify(tasksList);
    }, [tasksList]);

    const sortedTasksList = Array.from(tasksList).sort((a, b) =>
        Number(a.done) - Number(b.done)
    );

    const addTask = (description: string) => {
        const task:TodoItem = {
            id: Date.now(),
            description,
            done: false
        }
        setTasksList([...tasksList, task]);
    };

    const editTask: EditTaskFunction = (id: number,changeDone: boolean):void => {
        setTasksList(tasksList.map(
            (task)=>task.id === id ? {...task,done : changeDone}: task)
        );
    }

    const deleteTask: DeleteTaskFunction = (id: number):void => {
        setTasksList(tasksList.filter((task) => task.id !== id));
    };
    return {
        tasksList: sortedTasksList,
        editTask,
        deleteTask,
        addTask,
    };
}