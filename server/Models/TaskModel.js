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
        isComplete : {
            type : Boolean,
            default : false
        },
        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref  : 'User'
        }
    },
    {timestamps : true}
)

const Task = mongoose.model("Task", taskSchema);

export default Task;