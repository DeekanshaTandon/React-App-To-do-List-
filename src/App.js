import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Todos from './Todos';
import Header from './layout';
import AddTodo from './AddTodo';
import uuid from 'uuid';

import About from './About';


class App extends Component {
  // how to define a state 
  state = {
    todos: [
      {
        id:uuid.v4(),
        title:'Take out the trash',
        completed :false
      },
      {
        id:uuid.v4(),
        title:'Dinner with wife',
        completed : false
      },
      {
        id:uuid.v4(),
        title:'Meeting with boss',
        completed :false
      },

      //javascript object with todos as the array 

    ]
  }


  // Toggle Complete 
  markComplete =(id)=>{
    this.setState({todos:this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = ! todo.completed
      }

      return todo;
    }) });
  }




  //filter method is being used over here  ??(not working )

  delTodo = (id) =>{
    console.log(id);
    this.setState({todos : [...this.state.todos.filter(todo =>
      todo.id !== id)]})

  
  
  }

  //Add Todo Functionality 

  addTodo =(title)=>{
    //console.log(title)
    const newTodo ={
      id:uuid.v4(),
      title: title,
      completed:false
    }
    this.setState({todos: [...this.state.todos,newTodo]});
    //console.log(this.state);

  }



  render() {    //main method (we write components in javascript over here ) , use className
    //over here we are passing the todos as the props (property) which is passed as HTML

    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className ="container">
            <Header />
            <Route exact path ="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo ={this.addTodo} />
                <Todos todos ={this.state.todos} markComplete= {this.markComplete}delTodo = {this.delTodo}/>
              </React.Fragment>

            )} />

            <Route exact path = "/about" component= {About}/>           
        </div>
        
      </div>

      </Router>
    );
  }
}

export default App;
