import React from 'react';
import {connect} from 'react-redux';

import Modal from './modal.js';

class body extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: {}
        }
    }

    componentWillReceiveProps(newProps){
	    console.log("componentWillReceiveProps child", newProps);
	    console.log("componentWillReceiveProps child", newProps.products);
	    this.setState({
	      products: newProps.products.user[0]
	    }, () => {console.log("Log==>", this.state.products)})
	}

	changeobj(data) {
		this.setState({
			product: data
		}, () => {
			console.log("=====>", this.state.product);
		})
	}

    render() {
    	return (
    		<div className="containerPage">
    			<div className="row pt-3">
    				{(this.state.products.map((data, index) => {
              			return(
                			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pb-3">
	    					<div className="card border-dark h-100">
	    						<div className="card-body">
	    							<div className="row">
		    							<div className="col-6 d-flex seperatorLine">
		    								<img src={data.searchImage} alt="Login Form" className="border-0 img-thumbnail" />
		    							</div>
		    							<div className="col-6">
		    								<p><strong> {data.product} </strong></p>
		    								<p>price $ : {data.price}</p>
		    								<p>Brand Name : <strong>{data.brand}</strong></p>
		    								<p>Sizes Available : <footer> {data.sizes} </footer></p>
		    								<button type="button" onClick={this.changeobj.bind(this, data)} className="btn btn-success btn-sm btn-block" data-toggle="modal" data-target="#exampleModal">Buy</button>
		    							</div>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
              			);
            		}))}
    			</div>
    			<Modal dataSend={this.state.product}/>
    		</div>
    	)
    }
}

function mapStateToProps(state) {
  console.log("$$$", state)
  return {
    products: state
  };
}

export default connect(mapStateToProps)(body);