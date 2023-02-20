import React, { useState } from 'react';
import {Avatar, Checkbox, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import ProLayout, {PageContainer} from '@ant-design/pro-layout';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space, Modal } from 'antd';
import defaultProps from './_defaultProps';
import { history } from 'umi';
// import './index.less';
import logo from '@/assets/logo.png';
import {App} from '../pages/login'
import { DoubleRightOutlined } from '@ant-design/icons';
import HttpUtils from "../utils/HttpUtils";

export default (p_props) => {
  const [settings, setSetting] = useState({
    fixSiderbar: true,
    defaultCollapsed: true,
    breakpoint: false,
    isTeacher:true
  });
  const [pathname, setPathname] = useState(history.location.pathname);
  const [inputname, setInputname] = useState('');
  const [inputpw, setInputpw] = useState('');

  const [size, setSize] = useState('large');
  const imgStyle = {
    height:'40px',
    width:'40px',
    display:'inline-block',
  };
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState('不会了');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    console.log(inputname)
    console.log(inputpw)
    HttpUtils.post('http://127.0.0.1:8080/api/v1/sql_login?username='+inputname+'&password='+inputpw)
      .then((res) => {
        console.log('返回结果:', res);
        if (res.code === 204){

        }
        // this.setState(({
        //   data: res.result
        // }))
      })
      .catch((error) => {
        console.log('error: ' + error.message);
      });
    setConfirmLoading(true);
    setTimeout(() => {
      // history.push("/student")
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout

        {...defaultProps}
        // 展开路由项，logo={logo}
        title="学科知识图谱"
        location={{
          pathname, // 选中高亮
        }}
        waterMarkProps={{
          content: '',
        }}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
              }}
              href="https://#"
              target="_blank"
              rel="noreferrer"
            >
              {/* 底部图标 */}
              <img
                alt="pro-logo"
                src={logo}
                style={{
                  width: 16,
                  height: 16,
                  margin: '0 16px',
                  marginRight: 10,
                }}
              />
              {!(props === null || props === void 0
                ? void 0
                : props.collapsed) && '学科知识图谱'}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/home');
              history.push(item.path || '/home');
            }}
          >
            {dom}
            {/* dom是导航 */}
          </a>
        )}
        // headerContentRender={() => (
        //   <div>
        //
        //   </div>
        // )}
        headerRender={() => (
          <div>
            <DoubleRightOutlined style={{color:'#a1afc9'}}/>
            <h3 style={{display:'inline-block',marginLeft:'5px',color:'#a1afc9'}}>基于计算机学科知识图谱的智能问答系统</h3>
            {/*<Button type="primary" size={size} style={{display:'inline-block',marginLeft:'800px'}}>登录</Button>*/}
            <Button
              type="primary"
              onClick={showModal}
              style={{marginLeft:'1120px',display:'inline-block'}}
            >
              登录
            </Button>
            <Modal
              title="登录"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              width={450}
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: '请输入用户名!',
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="用户名"
                    value={inputname}
                    onChange={e => {setInputname(e.target.value);}}
                    style={{width:'340px'}}
                  />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: '请输入密码!',
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      value={inputpw}
                      onChange={e => {setInputpw(e.target.value);}}
                      placeholder="密码"
                      style={{width:'340px'}}
                    />
                  </Form.Item>
                  <Form.Item style={{marginLeft:'200px'}}>
                    <a className="login-form-forgot" href="">
                      忘记密码？
                    </a>
                    <a href="">立即注册!</a>
                  </Form.Item>
                  <Form.Item style={{marginTop:'-55px'}}>
                    {/*<Button type="primary" htmlType="submit" className="login-form-button">*/}
                    {/*  Log in*/}
                    {/*</Button>*/}
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                  </Form.Item>
                </Form>
            </Modal>
          </div>
        )}
        {...settings}
      >
      <PageContainer style={{fontSize:'10'}}>{p_props.children}</PageContainer>
      </ProLayout>
    </div>
  );
};
