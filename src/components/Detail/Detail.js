import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './Detail.css';

export default class Detail extends Component {
  render() {
    return (
      <span className="detail">
          <span className="age">年龄：{this.props.detail.age}</span>
          <span className="sex">性别：{this.props.detail.sex}</span>
          <span className="headPortrait">头像：<img src={this.props.detail.headPortrait} alt="" /></span>
      </span>
    )
  }
}