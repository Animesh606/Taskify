import React from "react";
import { MdAssignmentAdd } from "react-icons/md";

const AddTask = () => {
    const createNewTask = () => {

    }
    return (
        <MdAssignmentAdd
            className="react-icon addTask"
            title="Add New Task"
            fill="green"
            onClick={createNewTask}
        />
        
    );
};

export default AddTask;
