import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationsItems/NavigationItems'
import classes from './SiteDrower.css'
import Backdrop from '../../UI/Modal/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxe/Auxe'


const siteDrower = (props) => {

    let attachedClasses = [classes.SiteDrower, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SiteDrower, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
};

export default siteDrower;