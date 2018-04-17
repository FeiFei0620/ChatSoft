import React, { Component } from "react";
import mainRoutes from "../../../route.json";
import DataManage from "./dataManage";
import SchoolList from "./schoolList";
import AccountManage from "./accountManage";

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { seletedKeys } = this.props;
    let route = mainRoutes[seletedKeys];
    let content = <div>空</div>
    if(route === "dataManage"){
      content = <DataManage />
    }else if(route === "schoolList"){
      content = <SchoolList />
    }else if(route === "accountManage"){
      content = <AccountManage />
    }
    return (
      <div className="main-content">
        {content}
      </div>
    );
  }
}
