import React, {Component} from 'react';

import Header from '../home/header.js';

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carts: []
        }
    }

    render() {
        return(
          <div>
            <Header/>
            <div className="containerPage">
                Hello
            </div>
          </div>
        );
    }
}

export default home;