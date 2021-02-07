import React from 'react';
import Aux from '../../hoc/Auxe'


const layout = (props) => (
    <Aux>
        <div>Tollbar, Sidebar, drewbar</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;