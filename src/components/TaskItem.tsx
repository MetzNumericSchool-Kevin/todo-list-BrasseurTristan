import {DeleteTaskFunction, EditTaskFunction} from "./TypeFunction.ts";


export const TaskItem = ({id,done,desc,editTask, deleteTask}:{id:number,done:boolean, desc:string, editTask: EditTaskFunction, deleteTask: DeleteTaskFunction}) => {

    const isDone: string = done ? "bg-indigo-900" : "bg-indigo-700";
    const lineThrough: string = done ? "line-through": "";
    return (
        <div className={`${isDone} w-full m-5 rounded-box p-3 flex`}>
                    <span className="pr-8">
                        <input type="checkbox" className="checkbox" checked={done} onChange={()=> editTask(id,!done)}/>
                    </span>
            <span className={`${lineThrough} flex-grow text-white`}>
                        {desc}
                    </span>
            <div>
                <button className="btn btn-error btn-outline btn-xs" onClick={()=>deleteTask(id)}>
                    X
                </button>
            </div>
        </div>
    )
}