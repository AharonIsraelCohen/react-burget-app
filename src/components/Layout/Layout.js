import React from 'react';
import Aux from '../../hoc/Auxe';
import classes from './Layout.css';


const layout = (props) => (
    <Aux>
        <div>Tollbar, Sidebar, drewbar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;