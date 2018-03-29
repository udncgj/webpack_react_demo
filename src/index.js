import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppRouter from './router'
import todoApp from './reducers'

// import './css/public.less';

let store = createStore(todoApp);

// let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
// import {  } from "module";
// import 'whatwg-fetch';
import request from './utils/request'
if(self.fetch) {
  console.log('fetch');
  // run my fetch request here
} else {
  console.log('notfetch');
  // do something with XMLHttpRequest?
}
// request('/api/login?name=sdfe&password=23211', {method:'POST'})
//   .then((data)=>{console.log(data)})
// let url = '/api/login?name=&password=23211';
// (async()=>{
//   try {
//     let data = await request('/api/login?name=&password=23211', {method:'POST'});//.then((data)=>{console.log(data)});
//     // let data = response.json();
//     console.log(data);
//   } catch(e) {
//     console.log("Oops, error", e);
//   }
// })();

// let p1 = request(url, {method:'POST'})
//   // .then(data=>{console.log('p1'+data)})
//   // .catch(e => console.log(e));
// let p2 = request(url, {method:'POST'})
//   // .then(data=>{console.log('p2'+data)})
//   // .catch(e => console.log(e));
// let p3 = request(url, {method:'POST'})
//   // .then(data=>{console.log('p3'+data)})
//   // .catch(e => console.log(e));
// Promise.all([p1,p2,p3])
//   .then(result => console.log(result))
//   .catch(e => console.log(e));