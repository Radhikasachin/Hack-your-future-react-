import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {

  render(){
    const todos = [
      {description: 'Get out of bed', date: 'Wed Sep 13 2017'},
      {description: 'Brush teeth', date: 'Thu Sep 14 2017'},
      {description: 'Eat breakfast', date: 'Fri Sep 15 2017'}
    ];
    return(
      <div class="text-center">
        <h1>Todo App</h1>
        <ul>
          {todos.map(item => <Todo todo={item} key={item.date}  />)}
        </ul>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    const todo = this.props.todo;

    return(
      <li>
        <span>{todo.description + ', '}</span>
        <span>{todo.date + ', '}</span>
      </li>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
