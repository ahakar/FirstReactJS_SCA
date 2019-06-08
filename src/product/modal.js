import React from 'react';

class modal extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	 product: {}
        }
    }

    componentWillReceiveProps(newProps){
		this.setState({
			product: newProps.dataSend
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
							<form>
								<div className="form-row">
									<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pb-3">
										<input type="text" className="form-control" placeholder="Quantity"/>
									</div>
									<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pb-3">
										{(this.state.product.sizes) ?
								        	<select className="form-control" id="state">
										        {(this.state.product.sizes.split(',').map((data1, index) => {
										        	console.log("$$$$", data1);
													return(
														<option value={data1}>{data1}</option>
													);
	            								}))}
            								</select>
    								 	:
    								 		null
        								}									    
									</div>
									<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pb-3">
										<button type="button" className="btn btn-primary">Buy</button>
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

export default modal;