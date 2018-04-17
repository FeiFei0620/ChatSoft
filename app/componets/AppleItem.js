import React from "react";
import { eatApple } from "../logic/AppleItem";
import '../styles/appleItem.less';

class AppleItem extends React.Component {
  render() {
    let { apple } = this.props;
    return (
      <div className="appleItem">
        <div className="apple">
          <div className="apple_png" alt="" />
        </div>
        <div className="info">
          <div className="name">红苹果 - {apple.id}号</div>
          <div className="weight">{apple.weight}克</div>
        </div>
        <div className="btn-div">
          <button onClick={()=>eatApple(apple.id)}>吃掉</button>
        </div>
      </div>
    );
  }
}

export default AppleItem;
