import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginPage.css';
import Header from '../component/Header';

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Ajoutez ici la logique d'authentification
  };

  return (
    <>
      <Header/>
      <div className="container">
        <div className="login-container">
            <h3>OCCAR-Z Office</h3>
            <div className="form-container">
                <Form name="loginForm" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: "Veuillez entrer votre nom d'utilisateur!" }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Nom d'utilisateur" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Veuillez entrer votre mot de passe!" }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Mot de passe" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Se connecter
                    </Button>
                </Form.Item>
                </Form>
            </div>
        </div>
    </div>
    </>
  );
};

export default LoginPage;
