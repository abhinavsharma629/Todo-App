import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle= () =>
    {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed? 
            'line-through' : 'none'
        };
    }
    
    render() {
        const { id, title } = this.props.todo;

        return ( 
            <div style={this.getStyle()}>
                <p >
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
                    { title } 
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}><b>X</b></button>
                </p> 
            </div >
        )
    }
}

//PropTypes starting with the name of the class
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle={
    background: '#ff0000',
    colour: '#fff',
    border: 'none',
    padding: '3.5px 7px',
    borderRadius: '30%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem;