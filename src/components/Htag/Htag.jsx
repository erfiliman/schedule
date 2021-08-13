import React from 'react';
import styles from "./Htag.module.css"
import cn from "classnames";

const Htag = ({type, children}) => {
    switch (type) {
        case "s":
            return <h3 className={cn(styles.h, styles.h3)}>{children}</h3>
            break;
        case "m":
            return <h2 className={cn(styles.h, styles.h2)}>{children}</h2>
            break;
        case "l":
            return <h1 className={cn(styles.h, styles.h1)}>{children}</h1>
            break;
        default:
            break;
    }
};

export default Htag;