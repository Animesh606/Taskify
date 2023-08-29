import dash from '../Components/Assets/2689044.jpg';
import Features from '../Components/Layouts/Features';
import Tasks from '../Components/API/Tasks';
import Task from '../Components/Layouts/Task';
import { MdAssignmentAdd } from 'react-icons/md';

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-container">
                <Features/>
                <section className='gap'></section>
                <section className="main-content">
                    <div className='motive-img'>
                        <img src={dash} alt="dashboard" />
                    </div>
                    <div className='head'>
                        <input type="search" name="findTask" id="findTask" title='Search Task Title' placeholder='Search Tasks here' />
                        <h2>Task List</h2>
                        <MdAssignmentAdd className='react-icon addTask' title='Add New Task' fill='green'/>
                    </div>
                    <div className='Tasks'>
                        {Tasks.map((task) => {
                            return <Task key={task.id} data={task}/>
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Dashboard;