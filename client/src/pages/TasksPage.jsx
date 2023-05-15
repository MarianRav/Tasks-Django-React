import { useEffect, useState } from "react";

import { TasksList } from "../components/TasksList";
import { getAllTasks } from "../api/tasksapi";

export function TasksPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data);
        }
        loadTasks();
    }, []);

    return (<div>{tasks.map(task => <div key={task.id} style={{"background": "gray", "width": "100px"}}><h3>{task.title}</h3>
        <p>{task.description}</p></div>)}</div>)
}