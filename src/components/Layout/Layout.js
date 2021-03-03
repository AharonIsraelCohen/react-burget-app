import React, {Component} from 'react';
import Aux from '../../hoc/Auxe';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SiteDrower from '../Navigation/SiteDrower/SiteDrower'


class Layout extends Component {
    
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandle = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandle = () => {
        this.setState((prevStat) =>  {
        return {showSideDrawer: !this.state.showSideDrawer};
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandle}></Toolbar>
                <SiteDrower open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandle}></SiteDrower>
                <div>Tollbar, Sidebar, drewbar</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;