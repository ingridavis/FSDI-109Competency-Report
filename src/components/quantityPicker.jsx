import React, { Component } from 'react';

class QuantityPicker extends Component {
    state={ // read only attrtibute, change with setState
        quantity: this.props.value,
       name: "Ingrid"
    };
    
    render() { 
        
        return ( //return statement must only have one child
            <div className="quantityPicker">
                <button onClick={this.increase} className="btn btn-sm btn-info add" >+</button>  
                <label>{this.state.quantity} </label> 

                <button 
                onClick = {this.decrease} 
                disabled = {this.state.quantity === this.props.minimum}
                className = "btn btn-sm btn-info minus">
                -</button>

            </div>
         );
    }

    increase = () => { //you need an arrow function to use "this"
        console.log("increasing the value");
        let val = this.state.quantity +1
        this.setState({ quantity: val });
        this.props.onValueChange(val);
        
    };

    decrease = ()=> {
        let newVal = this.state.quantity -1;
        if( newVal >=  this.props.minimum ){
            this.setState({ quantity: newVal });
            // to notify the parent that it is increasing
        this.props.onValueChange(newVal);
        console.log("decreasing the value")
        }
        
    }
}
 
export default QuantityPicker;