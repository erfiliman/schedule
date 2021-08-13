import React, {useEffect} from 'react';
import Calendar from "../Calendar/Calendar";
import Tasks from "../Tasks/Tasks";
import styles from "./Main.module.css";

const Main = ({tasksArray, setTasksArray, activeDay, setActiveDay}) => {
    useEffect(() => {
    })
    return (
        <div className={styles.main}>
            <Calendar activeDay={activeDay} setActiveDay={setActiveDay}/>
            <Tasks tasks={tasksArray[`${activeDay.getFullYear()}-${activeDay.getMonth()}-${activeDay.getDate()}`]}
                   setTasksArray={setTasksArray} activeDay={activeDay}/>
        </div>
    );
};

export default Main;