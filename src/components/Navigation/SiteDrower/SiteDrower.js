import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationsItems/NavigationItems'
import classes from './SiteDrower.css'


const siteDrower = (props) => (
    <div className={classes.SiteDrower}>
        <Logo></Logo>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </div>
);

export default siteDrower;