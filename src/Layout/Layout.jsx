import React from 'react';
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout = ({tasksArray, setTasksArray, activeDay, setActiveDay}) => {
    return (
        <div className={styles.layout}>
            <Sidebar/>
            <Main tasksArray={tasksArray} setTasksArray={setTasksArray} activeDay={activeDay} setActiveDay={setActiveDay}/>
        </div>
    );
};

export default Layout;