import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { dataValidation } from './service';
import './AddTodo.less';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [require('../images/p1.jpg'), require('../images/p2.jpg'), require('../images/p3.jpg')],
      headPortrait: (props.button.img? props.button.img : ''),
      imgState: false
    }
  }
  render() {
    return (
      <div className={this.props.button.className}>
        <label>姓名：<input type='text' ref='name' /></label>
        <label>年龄：<input type='text' ref='age' /></label>
        <label>性别：<label><input type='radio' ref='sex1' name={this.props.button.className} value='男' defaultChecked={true} />男</label>
              <label><input type='radio' ref='sex2' name={this.props.button.className} value='女' />女</label></label>
        <label>头像：<img style={{width: '50px', height: '50px'}} src={this.state.headPortrait} alt="" onClick={() => this.setState({imgState: !this.state.imgState})} />
          { this.state.imgState && 
            <span>
              {this.state.img.map((item, index) => {
                return (<img key={index} src={item} alt="" onClick={() => this.imgSelect(index)} />)
              })}
            </span>
          }
        </label>
        <button onClick={(e) => this.handleClick(e)}>{this.props.button.name}</button>
      </div>
    )
  }
  imgSelect(index){
    // console.log(e);
    this.setState({imgState: false, headPortrait: this.state.img[index]});
  }
  componentDidMount(){
    if(this.props.button.text){
      console.log('button.text',this.props.button.text);
      const name = this.refs.name,
            age = this.refs.age,
            sex1 = this.refs.sex1,
            sex2 = this.refs.sex2;
      name.value = this.props.button.text.name;
      age.value = this.props.button.text.age;
      this.setState({imgState: false, headPortrait: this.props.button.text.headPortrait});
      if(this.props.button.text.sex === '男'){
        sex1.checked = true;
      }else{
        sex2.checked = true;
      }
    }
  }

  handleClick(e) {
    const name = this.refs.name,
          age = this.refs.age,
          sex1 = this.refs.sex1,
          sex2 = this.refs.sex2,
          text = {
            name: name.value.trim(), 
            age: age.value.trim(), 
            sex: (sex1.checked?sex1.value:sex2.value), 
            headPortrait: this.state.headPortrait
          };
    if(dataValidation(text)){
      if(this.props.button.className === 'addTodo'){
        this.props.onAddClick(text);
        name.value = '';
        age.value = '';
        sex1.checked = true;
      }else{
        this.props.onChangeClick(text, this.props.button.index);
        console.log(text);
        sex1.checked = true;
      }
    }
  }
}

// AddTodo.propTypes = {
//   onAddClick: PropTypes.func.isRequired
// }