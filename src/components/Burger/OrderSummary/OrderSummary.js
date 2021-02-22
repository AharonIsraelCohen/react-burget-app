import React from 'react';
import Aux from '../../../hoc/Auxe'
import Button from '../../UI/Modal/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}
                    </span>: {props.ingredients[igKey]}
                </li>);
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the folllowing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to check out</p>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <Button 
                clicked={props.pirchaseCancle}
                btnType="Danger"
            >CANCLE</Button>
            <Button
                clicked={props.pirchaseContinue}
                btnType="Success"
            >CONTINUE</Button>
        </Aux>  
    );
};

export default orderSummary;