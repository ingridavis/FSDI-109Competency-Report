//imrc
import React, { Component } from "react";

import { Link } from 'react-router-dom';
import "./navbar.css";
import { connect } from 'react-redux';
//import { incrementCartCounter } from ';
//cc
class NavBar extends Component {
    state = { }; // used to contain state of component
    render() { 
        return (

            <nav
                    className="navbar navbar-expand-lg"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <Link className="navbar-brand" to="/">
                      Organika
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/catalog">
                            Catalog
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/todo">
                            To Do
                          </Link>
                        </li>
                       
                      </ul>
               
            
            <div className="form-inline my-2 my-lg-0">
                        
                        <Link
                          className="btn btn-outline-info my-2 my-sm-0"
                          to = "/cart"
                        >
                         <i className="fas fa-shopping-cart cart-icon"></i> 
                         View Cart
                           
                         <span className="badge badge-warning cart-badge
                         .cart">{this.props.count}</span>
                        </Link>
                      </div>
                    </div>
                  </nav>
        
        );
    }
}
const mapStateToProps = (state) => {
  return {
    count: state.cart.length,
  };
};
 
export default connect(mapStateToProps, null )(NavBar);

// Advanced ES6 Topics to refresh on:
// Arrow functions
// Object destructuring
// Spread operator
// Array methods (filter, map, sort)