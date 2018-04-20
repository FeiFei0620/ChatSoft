import React, { Component } from "react";
// import "../styles/login.less";
import { Button, Input, Icon, Checkbox } from "antd";
import { Link } from "react-router-dom";

class Greeter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPwd: ""
    };
  }

  //change username
  onChangeUserName = e => {
    this.setState({
      userName: e.target.value
    });
  };

  onChangeUserPwd = e => {
    this.setState({
      userPwd: e.target.value
    });
  };

  //checkbox change
  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  loginClick = () => {
    let htmlobj = $.ajax({
      type: "GET",
      url: "route.json",
      async: false,
      dataType: "jsonp",
      // dataType: "jsonp",
    });
    console.log(htmlobj);
  };

  render() {
    let { userName, userPwd } = this.state;
    const suffix = userName ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null;
    const suffixOfPwd = userPwd ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null;
    return (
      <div className="login-page">
        <div className="login-frame">
          <div className="login-frame-title">{"用户登录"}</div>
          <div className="login-frame-body">
            <Input
              className="username-input"
              placeholder="输入用户名"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              suffix={suffix}
              onChange={this.onChangeUserName}
              ref={node => (this.userNameInput = node)}
            />
            <Input
              className="password-input"
              placeholder="输入密码"
              prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
              suffix={suffixOfPwd}
              onChange={this.onChangeUserPwd}
              ref={node => (this.userNameInput = node)}
            />
            <div className="save-pwd">
              <Checkbox onChange={this.onChange}>下次自动登录</Checkbox>
            </div>
            <div className="btns">
              <Link to="/mainPage"><Button
                type="primary"
                className="login-btn"
              >
                {"登录"}
              </Button></Link>

              {/*<Link to="/appleBasket">
                <Button type="danger">appleBasket</Button>
               </Link>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Greeter;
