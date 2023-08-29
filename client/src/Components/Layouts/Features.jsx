import { useState } from "react";
import { FaBars } from 'react-icons/fa';

const Features = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <section className={`features ${(show) ? 'responsive' : ''}`}>
                    <h2>Hi, Animesh</h2>
                    <ul>
                        <h3>Your Task List</h3>
                        <li>All Task</li>
                        <li>To do</li>
                        <li>Completed</li>
                        <li>Backlog</li>
                    </ul>
                    <ul>
                        <h3>Choose Priority</h3>
                        <li>All Task</li>
                        <li>High</li>
                        <li>Medium</li>
                        <li>Low</li>
                    </ul>
            </section>
            <FaBars className={`react-icon bar ${(show) ? 'responsive' : ''}`} title='Menu' onClick={() => setShow(!show)}/>
        </>
    )
}

export default Features;