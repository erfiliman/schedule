import Layout from "./Layout/Layout";
import {useEffect, useState} from "react";

function App() {
    const [activeDay, setActiveDay] = useState(new Date());
    const [tasksArray, setTasksArray] = useState({
        "2021-7-13": {
            "0:00": [{title: "test", description: "kekekke", status: true, extended: false}, {title: "test3", description: "kekekke", status: false, extended: false}],
            "0:30": [{title: "test2", description: "kekekke", status: false, extended: true}],
        },
    });

    useEffect(()=> {
        console.log(activeDay);
    }, [activeDay])
    return (
        <div>
            <Layout tasksArray={tasksArray} setTasksArray={setTasksArray} activeDay={activeDay} setActiveDay={setActiveDay}/>
        </div>
    );
}

export default App;
