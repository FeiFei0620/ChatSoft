import React from "react";
import { connect } from "react-redux";
import { pickAppleLogic } from "../logic/AppleBusket";
import AppleItem from './AppleItem';
import '../styles/appleBusket.less';

export default class AppleBusket extends React.Component {

    /**  计算当前已吃和未吃苹果的状态*/
    calculateStatus(){
        let status = {
            appleNow: {
                quantity: 0,
                weight: 0
            },
            appleEaten: {
                quantity: 0,
                weight: 0
            }
        };
        this.props.appleBasket.apples.forEach(apple => {
            let selector = apple.isEaten ? 'appleEaten':'appleNow';
                status[selector].quantity ++;
                status[selector].weight += apple.weight;
        });
        return status;
    }

    /** 获取未吃苹果的组件数组*/
    getAppleItem(apples) {
        let data = [];
        apples.forEach(apple => {
            if (!apple.isEaten) {
                data.push( <AppleItem apple={apple} key={apple.id}/> )
            }
        });

        if(!data.length) data.push(<div className="empty-tip" key="empty">苹果篮子空空如也</div>);

        return data;
    }

    render(){

        let { appleBasket } = this.props;
        let { apples, isPicking} = appleBasket;
        let status = this.calculateStatus();
        let {
            appleNow: {quantity:notEatenQuantity,weight:notEatenWeight},
            appleEaten: {quantity:EatenQuantity,weight:EatenWeight}
        } = status;


        return (
            <div className={"appleBusket"}>
                <div className="title">苹果篮子</div>

                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">{notEatenQuantity}个苹果，{notEatenWeight}克
                        </div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">{EatenQuantity}个苹果，{EatenWeight}克</div>
                    </div>
                </div>

                <div className="appleList">
                    { this.getAppleItem(apples) }
                </div>

                <div className="btn-div">
                    <button  className={isPicking ? 'disabled' : ''}  onClick={pickAppleLogic} >摘苹果</button>
                </div>
            </div>
        );
    }
}