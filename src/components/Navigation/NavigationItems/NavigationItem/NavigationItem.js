import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './NavigationItem.css';

//exact u NavLink-u da bi bio aktivan samo kada je taj link u pitanju, inace bi bilo vise njih aktivno iako smo samo na jednoj stranici
//activeClassName={classes.active} tako definisemo ime za css, posto NavLink po defaultu sam pravi svoja imena i onda u css ne mozemo lako da ih stilizujemo
const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active} >{props.children}</NavLink>
    </li>
);

export default navigationItem;