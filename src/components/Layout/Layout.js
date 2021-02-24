import React from 'react';
import Aux from '../../hoc/Auxe';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SiteDrower from '../Navigation/SiteDrower/SiteDrower'


const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <SiteDrower></SiteDrower>
        <div>Tollbar, Sidebar, drewbar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;