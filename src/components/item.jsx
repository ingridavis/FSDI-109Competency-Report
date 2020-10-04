import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";

import { incrementCartCounter } from "../components/store/actions";
import { connect } from 'react-redux';
import { addProduct } from './store/actions/index';


class Item extends Component {
    state = { 
        minimum: this.props.product.minimum || 1,
        quantity: this.props.product.minimum || 1, /* This is what decides the initial quantity 
        get the minimum or use 1 as the default*/
     };

    render() { 
        return (
            <div className="item">
                <img src={"/images/products/" + this.props.product.image} 
                alt="Product"></img>

                <h4>{this.props.product.title}</h4>
                
                <div className="prices">
                    <h6 className ="totalPrice-title"> <span >Total </span> $ {this.props.product.price * this.state.quantity} </h6>
                    <h6 className ="price-title"> <span >Price  </span>$ {this.props.product.price}</h6>

                </div>
                <div >
                    
                    <QuantityPicker 
                        value = {this.state.quantity}
                        onValueChange = { (qnt) => this.handleQuantityChange(qnt) } 

                        minimum = { this.state.minimum } 


                    ></QuantityPicker>

                    <button onClick={this.addProductToCart} className="btn btn-sm btn-primary btn-add">
                        <i className="fas fa-cart-plus addCart-icon"></i>
                        </button>
                </div>
                
            </div>
          );
    }

    addProductToCart = () => {
        const addedProduct = {
            product: this.props.product,
            quantity: this.state.quantity,
        };

        this.props.addProduct(addedProduct);
        this.props.incrementCartCounter();
    };

    handleQuantityChange = (qnt) => {
        console.log("Quantity: " + qnt ); 
        this.setState({quantity: qnt});
        //now everytime the qnt is changed, it'll update the state
    };
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

export default connect (mapStateToProps, { incrementCartCounter, addProduct})(Item);
