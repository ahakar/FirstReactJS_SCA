import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {sendCartData} from '../../actions/index.js';

class modal extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			 product: {},
			 cart: {},
			 quantity: "",
			 size: "",
			 modalDisplay: ""
        }
	}
	
	setQuantity(event) {
		this.setState({
			quantity: event.target.value
		})
	}
	
	setSize(event) {
		this.setState({
			size: event.target.value
		})
	}

    componentWillReceiveProps(newProps){
		this.setState({
			product: newProps.dataSend
		})
	}

	submitData(event) {
		event.preventDefault();
		this.state.cart['product'] = this.state.product;
		this.state.cart['quantity'] = this.state.quantity;
		this.state.cart['size'] = this.state.size;
		this.setState({
			cart: this.state.cart
		}, () => {
			this.props.sendCartData(this.state.cart);
			this.state.quantity = "";
			this.state.size = "";
			this.state.cart = {};
			this.setState({
				quantity: this.state.quantity,
				size: this.state.size,
				cart: this.state.cart
			})
			document.getElementById("closeButton").click();
		})
	}

    render() {
    	return (
    		<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">{this.props.dataSend.product}</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<img src={this.state.product.searchImage} alt="Login Form" className="border-0 img-thumbnail" />
						</div>
						<div className="modal-footer">
							<form onSubmit={this.submitData.bind(this)}>
								<div className="form-row">
									<div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pb-3">
										<input type="number" className="form-control" value={this.state.quantity} placeholder="Quantity" onChange={this.setQuantity.bind(this)} required/>
									</div>
									<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pb-3">
										{(this.state.product.sizes) ?
								        	<select className="form-control" value={this.state.size} onChange={this.setSize.bind(this)} required>
												<option value="">Select Size</option>
										        {(this.state.product.sizes.split(',').map((data1, index) => {
													return(
														<option value={data1}>{data1}</option>
													);
	            								}))}
            								</select>
    								 	:
    								 		null
        								}									    
									</div>
									<div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 pb-3">
										<button type="button" class="btn btn-secondary" id="closeButton" data-dismiss="modal">Close</button>
									</div>
									<div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pb-3">
										<button type="submit" className="btn btn-primary">Add to cart</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
    	)
    }
}

function mapStateToProps(state){
	return {
		
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({sendCartData: sendCartData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(modal);