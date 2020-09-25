import React from 'react';



const Todo = (props) => {
    const {todos} = props;
    const {deleteTodo} = props;
    const todoList = todos.length ? (todos.map(todo => {
        return(
                <li className='collection-item ' key={todo.id}>
                  <div><em>{todo.content}</em>
                    <a hred='#' className='secondary-content'>
                      <i className='material-icons blue-text' onClick={() => {deleteTodo(todo.id)}}>delete</i>
                    </a>
                  </div>
                </li>    
        ) 
    })) : (
      <p className='center'>You have no todo's left</p>
    )
    return(
      <div className='container'>
        <ul className='collection'>
          {todoList}
        </ul>
      </div>
        
    )
}

export default Todo