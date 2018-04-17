import React, { Component } from "react";
import { Table, Icon, Divider } from "antd";

const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index"
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "类型",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "所属街道",
    dataIndex: "street",
    key: "street"
  },
  {
    title: "单位人数/学生人数",
    dataIndex: "number",
    key: "number"
  },
  {
    title: "用餐人数",
    dataIndex: "account",
    key: "account"
  },
  {
    title: "量化分级",
    dataIndex: "step",
    key: "step"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">修改</a>
        <Divider type="vertical" />
        <a href="javascript:;">删除</a>
        <Divider type="vertical" />
        <a href="javascript:;">详情</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    index: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "2",
    index: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "3",
    index: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "4",
    index: "4",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "5",
    index: "5",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "6",
    index: "6",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "7",
    index: "7",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "8",
    index: "8",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "9",
    index: "9",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "10",
    index: "10",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "11",
    index: "11",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  },
  {
    key: "12",
    index: "12",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    street: "street1",
    number: 30,
    account: 20,
    step: "A"
  }
];
export default class MainHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  render() {
    let { seletedKeys } = this.props;

    return (
      <div className="school-list">
        <div className="title">{"学校列表"}</div>
        <div className="sep" />
        <div className="table">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    );
  }
}
