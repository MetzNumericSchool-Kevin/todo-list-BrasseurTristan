import React, {useState} from "react";

type Props = {
    addTask: (description: string) => void;
}

export function TaskInput({addTask}: Props ){
    const [taskDescription, setTaskDescription] = useState<string>("");
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setTaskDescription(e.currentTarget.value);
    };

    const handleSubmit = () => {
        if (taskDescription.trim()) {
            addTask(taskDescription);
            setTaskDescription("");
        }
    };

    const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleSubmit();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
        }
    };
    return (
        <div className="flex">
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Ajouter une tâche" onKeyDown={handleKeyDown} onChange={handleInputChange} value={taskDescription}/>
            </label>
            <button className=" ml-3 btn btn-primary" onClick={handleAddTask}>+</button>
        </div>
    );
}