import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../components/store/actions";
import './todo.css';
class Todo extends Component {
    state = {
        todoText:"",  
    };

    render() { 
        return ( 
            <div className="todo">
                <h2>TO-DO LIST</h2>
                <div>
                    <input 
                        type="text" 
                        value={this.state.todoText} 
                        onChange={this.onTextChange}
                        placeholder="Todo text"
                    ></input>

                    <button onClick={this.addTodo} className="btn btn-primary">Add</button>
                </div>

                <div className="list-group">
                    
                    {this.props.todos.map((t) =>  <div className="list-group-item"><li>{t}</li></div>)}
                    <hr></hr>
                    {this.getTodoCount()}

                </div>
            </div>
         );
    }

    getTodoCount= () =>{
        let count=this.props.todos.length;
        if(count === 1){
            return <label className="listItemCount"> You have 1 list item </label>;
        }
         return <label className="listItemCount"> You have {count} list items </label>;
        
    };

    onTextChange=(event) => {
        this.setState({todoText: event.target.value});
    };

    addTodo=() => {
        
        
        if(this.state.todoText){
            this.props.addTodo(this.state.todoText);
            this.setState({todoText: "" });
        } 
    };
}
 
 const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
 };
export default connect(mapStateToProps, { addTodo } )(Todo);