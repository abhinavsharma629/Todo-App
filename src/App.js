import React, { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';
import uuid from 'uuid';
import axios from 'axios';


class App extends Component {
	state={
		todos: [
		{
			id: uuid.v4(),
			title: 'Clean Room',
			completed: false
		},
		{
			id: uuid.v4(),
			title: 'Solve The Codeforces Problem',
			completed: false
		},
		{
			id: uuid.v4(),
			title: 'Submit PR to xyz repository',
			completed: false
		}
		]
	}

	componentDidMount() {
		// axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
		// .then(res => this.setState({todos: res.data}))
	}

	//Toggle Complete
	markComplete = (id) =>
	{
			this.setState({
				todos: this.state.todos.map((todo) => {
					if(todo.id === id){
						todo.completed = !todo.completed
					}
					console.log(todo);
					return todo;
				})
			});
	}

delTodo = (id) =>
{
	this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

addTodo = (title) =>
{
	//Manually adding data to UI

	// const newTodo = {
	// 	id: uuid.v4(),
	// 	title: title,
	// 	completed: false
	// }
	// this.setState({
	// 	todos: [...this.state.todos, newTodo]
	// });

	//Post Request to Json Placeholder
	axios.post("https://jsonplaceholder.typicode.com/todos", {
		title: title,
		completed: false
	})
	.then(res => this.setState({
		todos: [...this.state.todos, res.data] }));
}

  render() {
    return (
			<BrowserRouter>
				<div className="App">
				<div className="container">
				<Header></Header>

				<Route exact path="/" render={props => (
					<React.Fragment>
						<AddTodo addTodo={this.addTodo}></AddTodo>
						<Todos todos={this.state.todos} delTodo={this.delTodo} markComplete= {this.markComplete}/>
					</React.Fragment>
				)} />

				<Route path="/about" component={About}></Route>
					</div>
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
