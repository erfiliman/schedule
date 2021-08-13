import React, {useEffect, useState} from 'react';
import styles from "./Tasks.module.css";
import Htag from "../Htag/Htag";
import TaskItem from "../TaskItem/TaskItem";
import cn from "classnames";

const Tasks = ({ setTasksArray, tasks, activeDay}) => {
    const [timeLine, setTimeline] = useState([]);
    // const [showCreateIndexLine, setShowCreateIndexLine] = useState(null);
    useEffect(()=> {
        let array = [];
        for (let i = 0; i < 24; i++) {
            array.push(i + ":00");
            array.push(i + ":30");
        }
        setTimeline(array);
    },[activeDay])

    const onClickHandler = (item) => {
        setTasksArray((prevState)=> {
            let temp = tasks;
            // if (temp[item]) {
            //     temp[item].push({title: "test2", description: "kekekke", status: false, extended: true});
            //     console.log(1)
            // } else {
            //
            // }
            temp[item] = [{title: "test2", description: "kekekke", status: false, extended: true}];
            console.log(item);
            return {...prevState, [`${activeDay.getFullYear()}-${activeDay.getMonth()}-${activeDay.getDate()}`]: temp}
        })
    }

    return (
        <div className={styles.tasks}>
            <Htag type="l">23th May</Htag>
            <div className={styles.container}>
                {
                    timeLine.map((item, index)=> {
                        return (
                            <div className={cn(styles.timeItem, {
                                [styles.tasksNotEmpty]: !(tasks && tasks[item])
                            })} onClick={()=> onClickHandler(item)}>
                                <Htag type="m">{item}</Htag>
                                {
                                    tasks && tasks[item] && tasks[item].map((task)=>
                                        <TaskItem task={task}/>)
                                }
                            </div>)
                    })
                }
            </div>
        </div>
    );
};

export default Tasks;