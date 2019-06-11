import React, {Component} from 'react';

import Header from '../home/header.js';

const divStyleInfo = {
    margin: '40px',
    border: '1px solid #eee',
    borderLeftColor: '#5bc0de',
    borderLeftWidth: '.25rem',
    borderRadius: '.25rem',
    padding: '1.25rem',
    marginTop: '1.25rem',
    marginBottom: '1.25rem'
};

const divStyleSuccess = {
    margin: '40px',
    border: '1px solid #eee',
    borderLeftColor: '#28a745',
    borderLeftWidth: '.25rem',
    borderRadius: '.25rem',
    padding: '1.25rem',
    marginTop: '1.25rem',
    marginBottom: '1.25rem'
};

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
                <div className="card mb-3" style={divStyleInfo}>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <p className='h4'>Shopping Cart <small class="text-muted">Total : 5</small></p>
                        </div>
                        <div className="col-md-6">
                        
                        </div>
                        <div className="col-md-2">
                            <h5 className="card-title"> Total Price </h5>
                        </div>
                        <div className="col-md-1">
                            <h5 className="card-title"> Quantity </h5>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={divStyleSuccess}>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <img src="http://assets.myntassets.com/assets/images/productimage/2019/2/5/39bc4c0d-ab24-46d3-850a-7cb7938280891549359260545-1.jpg" className="card-img" alt="..." className="border-0 img-thumbnail" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">ALDO Women White & Navy Embellished Mules</h5>
                                <p className="card-text">
                                    <div class="row">
                                        <div className="col-6"><strong>Brand Name : </strong> xyz</div>
                                        <div className="col-6"><strong>Price $ : </strong> 699</div>
                                    </div>
                                </p>
                                <p className="card-text">
                                    <div class="row">
                                        <div className="col-6"><strong>Size : </strong> xyz</div>
                                    </div>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Delete | Edit
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <p className="h5 card-title"> $ 5.00 </p>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="card-body">
                                <p className="h5 card-title"> 2 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={divStyleSuccess}>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <img src="http://assets.myntassets.com/assets/images/productimage/2019/2/5/39bc4c0d-ab24-46d3-850a-7cb7938280891549359260545-1.jpg" className="card-img" alt="..." className="border-0 img-thumbnail" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">ALDO Women White & Navy Embellished Mules</h5>
                                <p className="card-text">
                                    <div class="row">
                                        <div className="col-6"><strong>Brand Name : </strong> xyz</div>
                                        <div className="col-6"><strong>Price $ : </strong> 699</div>
                                    </div>
                                </p>
                                <p className="card-text">
                                    <div class="row">
                                        <div className="col-6"><strong>Size : </strong> xyz</div>
                                    </div>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Delete | Edit
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <p className="h5 card-title"> $ 5.00 </p>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="card-body">
                                <p className="h5 card-title"> 2 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default home;