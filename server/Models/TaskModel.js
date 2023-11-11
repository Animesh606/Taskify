const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title : {
            type: String,
            required: true
        },
        description:{
            type:String,
            required:true
        },
        dueDate : {
            type: Date,
            default: null
        },
        priority : {
            type : String,
            required : true,
            enum : ["High", "Medium", "Low"]
        },
        complete : {
            type : Boolean,
            default : false
        }
    },
    {timestamps : true}
)

const Task = mongoose.model("Task", taskSchema);

export default Task;