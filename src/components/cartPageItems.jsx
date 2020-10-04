import React, { Component } from 'react';
import {connect} from 'react-redux';
import './cartPageItems.css';
import {removeProduct} from '../components/store/actions';

class CartPageItems extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "cartItem"> 
                <img className="productImage" src={"/images/products/" + this.props.info.product.image} alt="product"></img>
                
                <div>
                    <label className="description">{this.props.info.product.title}</label>
                </div>

                <div>
                    <label className = "price"> $ {this.props.info.product.price}</label>

                </div>
               
               <div className="price">
                   <label>QTY: {this.props.info.quantity}</label>
                </div>
                
                <div className="price">
                   <label>Total: $ {this.props.info.quantity * this.props.info.product.price}</label>
               </div>
               <div className="removeItem">
                   <h5>Remove</h5>
                    <i onClick={this.removeProduct} className = "fa fa-trash-o remove " aria-hidden="true"></i>
               </div>
                    
            </div>
            

         );
    }
    removeProduct = () => {
        console.log("sdf" + this.props.info.product.id);
        this.props.removeProduct(this.props.info.product.id);
    };
}
 
export default connect( null,{ removeProduct })(CartPageItems);