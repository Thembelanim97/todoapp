import React, {Component} from 'react';
import Todo from './todo';
import AddTodo from './addTodo'
class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Review Thembelani's portfolio"},
      {id: 2, content: 'Hire Thembelani'}
    ]
  }

  addTodo = (todo) => {
    if (this.state.todos.length){
      todo.id = this.state.todos[this.state.todos.length - 1].id + 1
    } else {
      todo.id = 0
      todo.id = todo.id + 1
    }
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  render(){
    return (
      <div className="App container">
        <h1 className='blue-text center'>Todo's</h1>
        <Todo deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <br></br>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
