import React, {Component} from 'react';
import { Route  } from 'react-router';
import { Switch, HashRouter } from 'react-router-dom';
import Home from './home/home.js';
import Cart from './cart/home.js';

export default class Routes extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/cart' component={Cart} />
                </Switch>
            </HashRouter>
        );
    }
}
