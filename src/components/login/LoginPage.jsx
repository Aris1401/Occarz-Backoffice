import React from 'react';
import { Form, Input, Button, Card, Flex } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginPage.css';
import { sendLoginInformations } from '../../services/auth/AuthServices';

const LoginPage = () => {
  const [loginForm] = Form.useForm();

  const onFinish = (values) => {
    // Creer les infos de login
    let loginInfos = {
      email: values.email,
      motDePasse: values.password
    }

    sendLoginInformations(loginInfos);
  };

  return (
    // Login informations

    <>
        <div className="container">
          <Card>
            <div className="login-container">
              <h3>OCCAR-Z Office</h3>
              <div className="form-container">
                <Form name="loginForm" form={loginForm} initialValues={{ remember: true }} onFinish={onFinish}>
                  <Form.Item
                    name="email"
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
          </Card>
        </div>
    </>
  );
};

export default LoginPage;
