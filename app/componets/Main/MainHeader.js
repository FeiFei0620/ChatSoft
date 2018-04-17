import React, { Component } from "react";
import { Icon} from 'antd';
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
  }

  logout = () =>{
    browserHistory.push('/appleBasket')
  }

  render() {
    return (
      <div className="main-header">
        <div className="header-left">{"****系统"}</div>
				<div className="header-right">
					<div>{"用户名"}</div>
          <Icon type="setting" className="icon"/>
          <Icon type="poweroff" className="icon-poweroff" onClick={this.logout}/>
          <Link to="/"><Icon type="poweroff" className="icon-poweroff" /></Link>
        </div>
      </div>
    );
  }
}
