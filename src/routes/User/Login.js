import React, { Component } from 'react';
// import './Login.less'
import UserChild from './Public.js'
import request from '../../utils/request'
import {formUrlData} from '../../utils/service'
import cookie from '../../utils/cookie'
import './Login.less'

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                title: '登录',
                input: [{
                    name: 'name',
                    type: 'text',
                    placeholder: '账号',
                },{
                    name: 'password',
                    type: 'password',
                    placeholder: '密码',
                }],
                submit: '登录',
                url: 'login',
            }
        };
    }

    handleSubmit(event) {
        let data = null;
        let formData = null;
        try {
            // console.log('eventTest ',event.type,event);
            data = formUrlData($(event.target).serializeArray());
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
        (async()=>{
            try {
                let resultData = await request('login', data);
                console.log(resultData);
                if(!resultData.code){
                    cookie.set('jnshuProjectUser',resultData.data.dESkey);
                }else{
                    alert(resultData.data);
                }
            } catch(e) {
                console.log("Oops, error", e);
            }
        })();
        event.preventDefault();
    }

    render(){
        return (
            <div className="user">
                <UserChild data={this.state.data} submitFun={this.handleSubmit} />
                <div className="user-other">
                    <span className="user-other-type" onClick={() => this.props.history.push('/user/register')}>用户注册</span>
                    <span className="user-other-wire"></span>
                    <span className="user-other-type">忘记密码</span>
                </div>
            </div>
        )
    }
}