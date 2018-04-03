import React, { Component } from 'react'
import {
    // HashRouter, hashHistory, Router,
    BrowserRouter as Router,
    BrowserHistory,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom'

import App from './containers/App/App'
import Footer from './components/Footer/index.js'
import Header from './components/Header/index.js'

import Login from './routes/User/Login'
import Error from './routes/Error/Error'
import Personal from './routes/Personal/Personal'
import Register from './routes/User/Register'

import styles from './public.less'

import historyUrl from './history';

import { connect } from 'react-redux';
import { setAppState } from './actions';

import config from './utils/config';

class AppRouter extends Component{
// const AppRouter = () => {
    // console.log(this);
    constructor(props) {
        super(props);
        // console.log(props.states);
        config(props);
    }
    render(){
        return (
            <Router history={BrowserHistory}>
                <div>
                    <Switch>
                        <Route path="/" component={Home}/>
                        {/* <Route component={Error}/> */}
                    </Switch>
                </div>
            </Router>
)}}

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
        // console.log(match);
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

// export default AppRouter;
export default connect((state)=>{
    return {
        states: state.states,
    }
})(AppRouter)