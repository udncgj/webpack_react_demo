import React, { Component } from 'react'
import {
  // HashRouter,
  // hashHistory,
  BrowserRouter as Router,
  BrowserHistory,
  Route,
  Switch,
  // Router,
  Redirect,
  Link
} from 'react-router-dom'
import App from './containers/App/App'
import Footer from './components/Footer/index.js'
import Header from './components/Header/index.js'
import Login from './routes/User/Login.js'
import Register from './routes/User/Register.js'
import styles from './public.less'

import historyUrl from './history';

const AppRouter = () => (
  <Router history={BrowserHistory}>
    <div>
      <Switch>
        <Route path="/" component={Home}/>
        {/* <Route component={Error}/> */}
      </Switch>
    </div>
  </Router>
)

class Home extends Component{
  render(){
    let match = this.props.match;
    // console.log('home',this.props);
    return (
      <div>
        <Header history={this.props.history} />
        <Switch>
          <Route path={historyUrl.home} component={Main}/>
          <Route path={historyUrl.login} component={User}/>
          <Route path={historyUrl.error} component={Error} />
          {/* <Redirect from='*' to={historyUrl.error} /> */}
          <Redirect from='/' to='/main' />
        </Switch>
      </div>
    )
  }
}
class Main extends Component{
  render(){
    let match = this.props.match;
    // console.log(match);
    return (
      <div>
        <Footer history={this.props.history} />
        <Switch>
          {/* <Route path={match.url} component={Footer}/> */}
          <Route exact path={match.url} component={App}/>
          <Route path={`${match.url}/personal`} component={Personal}/>
          <Redirect from='*' to={historyUrl.error} />
        </Switch>
      </div>
    )
  }
}
class User extends Component{
  render(){
    let match = this.props.match;
    console.log(match);
    return (
      <div>
        <Switch>
          <Route exact path={match.url} component={Login}/>
          <Route path={`${match.url}/Register`} component={Register}/>
          <Redirect from='*' to={historyUrl.error} />
        </Switch>
      </div>
    )
  }
}
class Error extends Component{
  render(){
    console.log('error',this.props.history);
    return (
      <div>
        <h2>404</h2>
        <h4>not found {this.props.history.location.pathname}</h4>
      </div>
    )
  }
}
class Personal extends Component{
  render(){
    return (
      <div>
        <h2 onClick={() => this.props.history.push('/user')}>登录/注册</h2>
      </div>
    )
  }
}

export default AppRouter;