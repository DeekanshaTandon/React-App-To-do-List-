import React, { Component } from 'react';

class AddTodo extends Component {
    state ={
        title :''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value });

    onSubmit =(e) =>{
        //console.log(this.state);
        e.preventDefault();
        //console.log(e.target.value);
        this.setState({title : ""});
        this.props.addTodo(this.state.title);
        

    }

    render(){
        return(
            <form onSubmit ={this.onSubmit} style ={{display :'flex'}}>
                <input
                type ="text"
                name="title"
                style = {{flex: '10' , padding: '5px'}}
                value ={this.state.title}
                onChange = {this.onChange}
                placeholder = "Add Todo....." />

                <input
                type ="submit"
                value ="Submit"
                className ="btn"
                style ={{flex: '1'}} />

            </form>
        )
    }
}
export default AddTodo
