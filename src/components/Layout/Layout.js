import React from 'react';
import Aux from '../../hoc/Auxe';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'


const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <div>Tollbar, Sidebar, drewbar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;