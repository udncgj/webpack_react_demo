import { combineReducers } from 'redux';
import { ADD_TODO, CHANGE_TODO, COMPLETE_TODO, DEL_TODO, APP_STATE } from '../actions';//, SET_VISIBILITY_FILTER, VisibilityFilters
// const { SHOW_ALL } = VisibilityFilters;

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }
function states(state={},action) {
  switch (action.type){
    case 'APP_STATE':
      let data = action.data
      // console.log('states',state,data)
      let key = Object.keys(data)[0];
      state[key] = data[key]
  }
  return state
}
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      // console.log(state,action);
      return [
        ...state,
        {
          name: action.name,
          age: action.age,
          sex: action.sex,
          headPortrait: action.headPortrait,
          completed: false
        }
      ];
    case CHANGE_TODO:
      // console.log(state, action);
      return state.map((item, index) => {
        if( index === action.index ){
          item.name = action.name;
          item.age = action.age;
          item.sex = action.sex;
          item.headPortrait = action.headPortrait;
        }
        return item;
      });
    case COMPLETE_TODO:
      // console.log(state,action);
      return state.map((item, index) => {
        item.completed = action.index === index? !item.completed : item.completed;//(action.index === index && !item.completed)? true : false; 
        return item;
      });
    case DEL_TODO:
      // console.log(state,action);
      return state.filter((item, index) => {
        return action.index !== index;
      })
    default:
      return state;
  }
}

const todoApp = combineReducers({
  // visibilityFilter,
  todos,
  states
})

export default todoApp