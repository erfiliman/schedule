import React from 'react';
import styles from "./TaskItem.module.css"
import Htag from "../Htag/Htag";
import cn from "classnames";

const TaskItem = ({task}) => {
    return (
        <div className={cn(styles.taskItem,{
            [styles.containerActive]: task.status,
            [styles.containerinactive]: !task.status,
        } )}>
            <div className={cn(styles.status,{
                [styles.active]: task.status,
                [styles.inactive]: !task.status,
            })}></div>
            <div className={styles.title}>
                {
                    task.extended? <input type="text" value={task.title}/>: <Htag type="m">{task.title}</Htag>
                }
            </div>
            {
                task.extended && <div className={styles.description}>
                    <textarea value={task.description}/>
                </div>
            }
            {
                task.extended && <div>Сохранить</div>
            }
        </div>
    );
};

export default TaskItem;