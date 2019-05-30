import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    //dynamic styling 
    // we cam do this using ternary opearators as well .
    getStyle =()=> {

        if(this.props.todo.completed){
            return {
                textDecoration : 'line-through',
                backgroundColor : '#f4f4f4'
            }
        } else{
            return{
                textDecoration: 'none',
                backgroundColor : '#f4f4f4'
            }
        }

    }


    // other option is component drilling todoItems -> Todos-> App.js and we do this through props(since we are not using Redux )
    // always use the arrow function for it or we can use the bind.this as well.

   /* markComplete = (e) => {

        console.log(this.props)

    }*/


  render() {  
      const{ id, title } = this.props.todo; 
      //console.log("item", this.props);
    return(
        <div style = {this.getStyle()} >
            <p>
                <input type = "checkbox" onChange ={this.props.markComplete.bind(id)} /> { ' '}
                {title}
                <button onClick ={() => this.props.delTodo(id)} style ={btnstyle}>x</button>
            </p>
        </div>
        )
    }
}


//Proptypes 
TodoItem.propTypes ={
    todo : PropTypes.object.isRequired
}

const btnstyle={
    backgroundColor:'#ff0000' ,
    color:'#fff',
    border : 'none',
    padding :'5px 8px',
    borderRadius :'50%' ,
    cursor: 'pointer',
    float:'right'
}




export default TodoItem;