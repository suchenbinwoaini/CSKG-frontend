import {Button, Space, Table, Tag} from 'antd';
import React, { useState } from 'react';
import HttpUtils from "../../utils/HttpUtils";
import ApiUtils from "../../utils/ApiUtils";

class queTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: '问题题目',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <a>{text}</a>,
        },
        {
          title: '所属学科',
      key: 'desc',
      dataIndex: 'desc',
      render: (_, { desc }) => {
        let color = desc.length > 5 ? 'geekblue' : 'green';
        if (desc === 'loser') {
          color = 'volcano';
        }
        return(
          <Tag color={color}>
            {desc}
          </Tag>
        )
      },
    },
        {
      title: '点赞数',
      dataIndex: 'likes',
      key: 'likes',
    },
        {
      title: '解答',
      dataIndex: 'answer',
      key: 'answer',
    },
        {
      title: '解决情况',
      dataIndex: 'status',
      key: 'status',
    },
        {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button>解答</Button>
        </Space>
      ),
    },
        ],
        data: [],
        flag: false,
      };
  }
  render() {

//     const data = [
//   {
//     id: 1,
//     title: '指令寄存器的位数取决于什么',
//     desc: '计算机组成原理',
//     likes: 23,
//     answer: ' ',
//     status: ' 未解决',
//
//   },
//   {
//     id: 2,
//     title: '一条指令中包含的信息有',
//     desc: '计算机组成原理',
//     likes: 11,
//     answer: ' ',
//     status: ' 未解决',
//
//   },
//   {
//     id: 3,
//     title: '程序顺序执行时有什么特征',
//     desc: '数据结构',
//     likes: 5,
//     answer: ' ',
//     status: '未解决',
//   },
// ];
    return(
          <Table columns={this.state.columns} dataSource={this.state.data} ></Table>
    )
  }
  componentDidMount() {
    HttpUtils.get('http://127.0.0.1:8080/api/v1/sql_que')
      .then((res) => {
        console.log('返回结果:', res);
        console.log('返回结果:', res.result[0]);
        this.setState(({
          data: res.result
        }))
      })
      .catch((error) => {
        console.log('error: ' + error.message);
      });
  }
}

// const App = () => <Table columns={columns} dataSource={data} />;
export default queTable;
