import React, {useEffect, useState} from 'react';
import Htag from "../Htag/Htag";
import styles from "./Calendar.module.css";
import cn from "classnames";
import {months} from "./../../constants";

const Calendar = ({activeDay, setActiveDay}) => {
    const [array, setArray] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [date, setDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
    const daysWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    useEffect(() => {
        const day = (new Date(year, currentMonth, 1).getDay() + 6) % 7;
        const dayInCurrentMonth = daysInMonth(currentMonth, year);
        const daysInPrevMonth = daysInMonth(currentMonth - 1, year);
        for (let i = daysInPrevMonth - day + 1; i <= daysInPrevMonth; i++) {
            setArray((prevState) => [...prevState, {date: new Date(year, currentMonth -1, i), bold: false}]);
        }
        for (let i = 1; i <= dayInCurrentMonth; i++) {
            setArray((prevState) => [...prevState, {date: new Date(year, currentMonth, i), bold: true}])
        }
        for (let i = 1; i <= 42 - day - dayInCurrentMonth; i++) {
            setArray((prevState) => [...prevState, {date: new Date(year, currentMonth + 1, i), bold: false}])
        }
    }, [currentMonth])

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    }

    const onClickBack = (e) => {
        e.preventDefault();
        if (currentMonth == 0) {
            setCurrentMonth(11);
            setYear(prevState => prevState - 1);
            setArray([])
        } else {
            setArray([])
            setCurrentMonth(prevState => prevState - 1);
        }

    }

    const onClickNext = (e) => {
        e.preventDefault();
        if (currentMonth == 11) {
            setCurrentMonth(0);
            setYear(prevState => prevState + 1);
            setArray([])
        } else {
            setCurrentMonth(prevState => prevState + 1);
            setArray([])
        }
    }

    const onClickHandler = (day, index) => {
        setActiveDay(new Date(year, currentMonth, day));
    }

    return (
        <div>
            <div className={styles.topPanel}>
                <Htag type="l">
                    {
                        `${months[currentMonth].name} ${year}`
                    }
                </Htag>
                <div className={styles.controls}>
                    <button className={cn(styles.controlBtn, styles.controlBtnBack)} onClick={onClickBack}></button>
                    <button className={cn(styles.controlBtn, styles.controlBtnNext)} onClick={onClickNext}></button>
                </div>
            </div>
            <div className={styles.grid}>

                {
                    daysWeek.map((i, index) => <div className={cn(styles.calendarItem, styles.bold, {
                        [styles.even]: index % 7 % 2 !== 0
                    })}>
                        <div>{i}</div>
                    </div>)
                }
                {
                    array.map((i, index) => <div className={cn(styles.calendarItem)}>
                        <div className={cn(styles.dayItem, {
                            [styles.today]: i.date.getTime() == date.getTime(),
                            [styles.dayActive]: i.date.getTime() == activeDay.getTime(),
                            [styles.greyFont]: !i.bold
                        })} onClick={()=> onClickHandler(i.date.getDate(), index)}>{i.date.getDate()}</div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Calendar;