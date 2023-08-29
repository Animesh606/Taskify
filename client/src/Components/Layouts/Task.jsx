import { MdDeleteForever, MdEditNote } from 'react-icons/md';

const Task = ({data}) => {
    return (
        <div className="Task">
            <div className="title">
                <button title={data.priority} id={data.priority}></button>
                <h4>{data.title}</h4>
            </div>
            <p>{data.description}</p>
            <div className='taskButtons'>
                <span>Due : {data.dueDate}</span>
                <div>
                    <MdEditNote className='react-icon' title='Edit'/>
                    <MdDeleteForever className='react-icon' title='Delete' fill='rgb(204, 3, 3)'/>
                </div>
            </div>
        </div>
    )
}

export default Task;