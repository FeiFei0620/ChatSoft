import React, { Component } from "react";
import MainHeader from "./MainHeader";
import MainNav from '../../containers/MainNav';
import MainContent from '../../containers/MainContent';
import '../../styles/mainPage.less';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-page">
        <div className="main-header">
          <MainHeader />
        </div>
        <div className="main-body">
          <MainNav />
          <MainContent />
        </div>
      </div>
    );
  }
}
