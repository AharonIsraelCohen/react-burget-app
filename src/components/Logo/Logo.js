import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
// We using this, instend of giving the path to the asset in the src tag, 
// because This is the way to let the webpack know that we using this image, other wise it will work only in dev

import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger"></img>
    </div>
);

export default logo;