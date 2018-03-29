import React, { Component } from 'react';
import './index.less'
import { Link } from 'react-router-dom'
import historyUrl from '../../history';
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            main: {
                left: {type:'back',url:null,img:'./img/back.png'},
                title: {name: '主页'},
                right: {type:'Link',url:historyUrl.login,img:'./img/mine.png'}
            },
            login: {
                left: {type:'back',img:'./img/back.png'},
                title: {name: '登录'},
            },
            register: {
                left: {type:'back',img:'./img/back.png'},
                title: {name: '注册'},
            },
        };
    }
    headerSet(o){
        if(!o) return null;
        let img = <img src={o.img}/>;
        switch(o.type){
            case "back":
                return <span onClick={()=>history.back(-1)}>{img}</span>; 
                break;
            case "Link":
                return <Link to={o.url} >{img}</Link>; 
                break;
            default: return null;
        }
    }
    render(){
        let data = this.state.main;
        // console.log(this.props);
        let url = this.props.history.location.pathname;
        if(url === historyUrl.login) {console.log('login');data = this.state.login;}
        if(url === historyUrl.register) {console.log('register');data = this.state.register;}
        console.log('header',url,data);
        return (
            <div className="header box-between">
                <div className="header-left">{this.headerSet(data.left)}</div>
                <div className="header-title">{data.title.name}</div>
                <div className="header-right">{this.headerSet(data.right)}</div>
            </div>
        )
    }
    componentDidMount() {
    }
}