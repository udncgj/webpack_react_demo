import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import Todo from './Todo';
import Detail from '../Detail/Detail';
import AddTodo from '../AddTodo/AddTodo';
//import { addTodo } from '../../actions';//, setVisibilityFilter
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {},
      user: false
    }
  }
  render() {
    // const { dispatch } = this.props;
    // console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, index) => {
            return (
              <li key={index} className="list-li">
                <button onClick={() => this.props.onTodoDel(index)}>删除</button>&emsp;
                <button onClick={() => this.setState({text: todo, user: true, index})}>修改</button>
                <span onClick={() => this.props.onTodoClick(index)} style={{cursor: 'pointer'}}>&emsp;{todo.name}</span>
                {todo.completed && <Detail detail={todo}/>}
              </li>
            )}
          )}
        </ul>
        {this.state.user && 
          <div className="changeTodoParent">
            <AddTodo className="changeTodo" 
              button={{name: '修改', className: 'changeTodo', text: this.state.text, index: this.state.index }}
              onChangeClick={(text, index) => {
                this.props.onTodoChange(text, index);
                this.setState({user: false});}
              } />
          </div>
        }
      </div>
    )
  }
}

// TodoList.propTypes = {
//   onTodoClick: PropTypes.func.isRequired,
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired
//   }).isRequired).isRequired
// }