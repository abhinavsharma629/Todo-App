import React, { Component } from 'react'

export class AddTodo extends Component {
  
  state = {
    title: ''
  }

  
  onSubmit= (e) => {
    e.preventDefault(); //Prevent default submit property of a form
    //console.log(this.state.title);
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
    
  }

  onChange= (e) => this.setState({
    [e.target.name]:
    e.target.value});


  render() {
    return (
      <form style={{ display: 'flex' }}>
          <input
          type="text"
            onChange={this.onChange} 
            value= {this.state.title} 
            name="title"
            style={{ flex: '10', padding: '5px 10px' }}
            placeholder="Add Todo....">
          </input>

          <input
            type="submit"
            value="Submit"
            onClick={this.onSubmit}
            className="btn btn-default"
            style={{ flex: '1' }}>
          </input>
      </form>
    );
  }
}

export default AddTodo
 