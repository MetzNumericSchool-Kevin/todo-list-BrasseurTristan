import {TaskItem} from "./TaskItem.tsx";
import {DeleteTaskFunction, EditTaskFunction} from "./TypeFunction.ts";
import {TodoItem} from "../hooks/useTodo.ts";


export const TaskList = ({tasksList, editTask, deleteTask}: { tasksList: TodoItem[], editTask : EditTaskFunction, deleteTask:DeleteTaskFunction}) => {

    const taskList = tasksList.map(item => {
        return <TaskItem key={item.id}  id={item.id} desc={item.description} done={item.done} editTask={editTask} deleteTask={deleteTask}/>
    });

    return (
        <div className="my-5 flex-column gap-5 w-full text-left">
            {taskList}
        </div>
    );
}