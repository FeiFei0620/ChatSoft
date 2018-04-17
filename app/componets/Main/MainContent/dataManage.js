import React, { Component } from "react";

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { seletedKeys } = this.props;
    
    return (
      <div>{"元数据管理"}</div>
    );
  }
}
