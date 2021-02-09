import React, {Component} from 'react';
import Aux from '../../hoc/Auxe'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <Burger></Burger>
                <div>Build controller</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;