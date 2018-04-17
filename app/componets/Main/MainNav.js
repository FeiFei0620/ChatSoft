import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { updateSelectedKeyLogic } from "../../logic/mainPage";

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class MainNav extends Component {
  constructor() {
    super();
    this.state = {
      openKeys: ["sub1"],
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      selectedKeys:"1"
    };
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  handleClick = (e) =>{
    updateSelectedKeyLogic(e.key);
    // this.setState({
    //   selectedKeys: e.key,
    // });
  }

  render() {
    let { seletedKeys } =this.props;
    return (
      <div className="main-nav">
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={[seletedKeys]}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
          onClick={this.handleClick} 
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>{"基础数据管理"}</span>
              </span>
            }
          >
            <Menu.Item key="1">{"元数据管理"}</Menu.Item>
            <Menu.Item key="2">{"学校列表"}</Menu.Item>
            <Menu.Item key="3">{"账号管理"}</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
