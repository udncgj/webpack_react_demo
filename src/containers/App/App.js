import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, changeTodo, completeTodo, delTodo,setAppState } from '../../actions';
import AddTodo from '../../components/AddTodo/AddTodo';
import TodoList from '../../components/TodoList/TodoList';
// import Footer from '../../components/Footer';
import { localStorageSave, localStorageGet } from '../../utils/service';

class App extends Component {
  constructor(props, context) {
    super(props);
    let list = localStorageGet('bianchengmaoDataList');
    if(Object.prototype.toString.call(list) === '[object Array]' && !this.props.states.appState){
      list.forEach((item) => {
        props.dispatch(addTodo(item))
      });
      props.dispatch(setAppState({appState:true}))
    }
  }
  render() {
    // Injected by connect() call:
    // console.log(this.props)
    const { dispatch, visibleTodos } = this.props;//, visibilityFilter
    return (
      <div>
        <AddTodo
          button={{name: '添加', className: 'addTodo'}}
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(completeTodo(index))
          }
          onTodoDel={index =>
            dispatch(delTodo(index))
          }
          onTodoChange={(text, index) =>
            dispatch(changeTodo(text, index))
          } />
        {/* <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } /> */}
      </div>
    )
  }
  componentDidUpdate(nextProps, nextState){
    localStorageSave('bianchengmaoDataList', this.props.visibleTodos);
  }
}
  
  // 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
  export default connect((state)=>{
    return {
      visibleTodos: state.todos,
      states: state.states,
    }
  })(App)