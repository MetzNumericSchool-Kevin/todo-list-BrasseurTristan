
import {TaskInput} from "./taskInput.tsx";
import {TaskList} from "./TaskList.tsx";

import useTodo from "../hooks/useTodo.ts";


export function TodoApp() {

    const {tasksList, editTask, deleteTask, addTask } = useTodo();

    return (
        <>
            <TaskInput addTask={addTask} />
            <TaskList tasksList={tasksList} editTask={editTask} deleteTask={deleteTask} />
        </>
    )
}