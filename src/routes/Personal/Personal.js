import React, { Component } from 'react';
import './Personal.less'

export default class Personal extends Component{
    render(){
        return (
            <div className="pessonal">
                <h2 onClick={() => this.props.history.push('/user')}>登录/注册</h2>
            </div>
        )
    }
}