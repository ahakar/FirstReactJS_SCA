import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

import {loadProducts} from '../actions/index.js';
import Body from '../product/body.js';
import Header from './header.js';

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('http://images.stockal.com/api/products.json').then(res => {
            this.setState({
                products: [...this.state.products, ...res.data.data.products]
            }, () => {this.props.loadProducts(this.state.products)})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
          <div>
            <Header/>
            <Body/>
          </div>
        );
    }
}

function mapStateToProps(state){
  return {

  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators ({loadProducts: loadProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(home);
