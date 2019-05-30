import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

  
  render() {    //main method (we write components in javascript over here ) , use className
    //console.log(this.props.todos);
    //map method to return an array from an array  just like for each , whenever we iterate over using the map method we get a list and we need a unique key 
    /*return this.props.todos.map((todo) => (

        
        <h3> {todo.title } </h3>

        //<TodoItem key ={todo.id} todo ={todo}/>
        <TodoItem />

    ));*/
    return (
        <div>
            {
                this.props.todos.map((todo) => {
                    //console.log("todo", this.props)
                    return(
                        <p>
                            <TodoItem  key = {todo.id} todo = {todo} markComplete = {this.props.markComplete} delTodo ={this.props.delTodo}/>
                        </p>
                    )
                })
            }
        </div>
    )
  }
}


//Proptypes 
Todos.propTypes ={
    todos : PropTypes.array.isRequired
}

export default Todos;
