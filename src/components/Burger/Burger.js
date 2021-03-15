import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    //keys nam vraca array pa zbog toga mozemo koristiti map funkciju
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []); //ovo duplo mapiranje je valjda zbog toga sto nekad imamo 2 sira u burgeru pa da oba imaju svoj kljuc

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

//withRouter je specijalna hoc koja nam dodaje match, location i history od njegove visse komponente (BurgerBuilder)
//da bismo pristupili nekim podacima od BurgerBuildera
export default withRouter(burger);
