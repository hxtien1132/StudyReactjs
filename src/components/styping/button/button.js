import React from 'react';
// import "./button.scss"
import styles from "./button.module.css"
const Button = (props) => {
    //styles là tên class css
    // return <button className={`button ${props.className || ""}`}></button>

    //css.module
    return <button className={`${styles.button} ${props.secondary ? styles.buttonSecondary : ""}`}>{props.children}</button>
};

export default Button;