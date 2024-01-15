import React, { useState } from 'react';
import { Layout, Button, Table, Space, Modal, Card, Badge } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import SideBar from '../component/SideBar';
import './Annonce.css';

const { Content, Header } = Layout;

const Annonce = ({ data, onValidate }) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = [
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleValidate(record)}>
            Valider
          </Button>
        </Space>
      ),
    },
    {
      title: 'Annonce',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img alt="annonce" src={record.image} />}
        >
          <Card.Meta title={record.title} description={record.description} />
          <div className="badges-container">
            {record.badges.map((badge, index) => (
              <Badge key={index} status="success" text={badge} />
            ))}
          </div>
          <div className="details-container">
            <div>
              <p>{record.name}</p>
              <p>{record.date}</p>
            </div>
            <div>
              <p>{record.price}</p>
            </div>
          </div>
        </Card>
      ),
    },
  ];

  const handleValidate = (record) => {
    onValidate(record);
  };

  const handleLogout = () => {
    // Ajoutez ici la logique de déconnexion
    console.log('Déconnexion');
  };

  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div style={{ float: 'right', marginRight: '16px' }}>
            <Button icon={<LogoutOutlined />} onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </Header>
        <SideBar />
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ padding: '24px', minHeight: '100vh' }}>
            <h1>Liste des Annonces</h1>
            <Table dataSource={data} columns={columns} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Annonce;
