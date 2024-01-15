import React, { useState } from 'react';
import { Layout, Form, Input, Button, Table, Space, Modal } from 'antd';
import SideBar from '../component/SideBar';
import './CRUD.css';

const { Content } = Layout;

const CRUD = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Action', key: 'action', render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      )},
    ];
  
    const handleInsert = (values) => {
      setData([...data, { key: data.length + 1, name: values.name }]);
      form.resetFields();
    };
  
    const handleEdit = (record) => {
      form.setFieldsValue({ name: record.name });
      setSelectedItem(record);
      setIsModalVisible(true);
    };
  
    const handleUpdate = (values) => {
      const newData = data.map(item => (item.key === selectedItem.key ? { ...item, name: values.name } : item));
      setData(newData);
      setIsModalVisible(false);
      form.resetFields();
    };
  
    const handleDelete = (key) => {
      const newData = data.filter(item => item.key !== key);
      setData(newData);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
      form.resetFields();
    };
  
    return (
<>
<Layout>

        <SideBar />
          <Content style={{ padding: '24px' }}>
            <h1>Insertion Form</h1>
            <Form form={form} onFinish={handleInsert} layout="inline">
              <Form.Item name="name" rules={[{ required: true, message: 'Please input a name!' }]}>
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Insert
                </Button>
              </Form.Item>
            </Form>
            
            <h1>List of Items</h1>
            <Table dataSource={data} columns={columns} />
  
            <Modal
              title="Edit Item"
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={[
                <Button key="cancel" onClick={handleCancel}>
                  Cancel
                </Button>,
                <Button key="update" type="primary" onClick={() => form.submit()}>
                  Update
                </Button>,
              ]}
            >
              <Form form={form} onFinish={handleUpdate} layout="vertical">
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input a name!' }]}>
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </Content>
</Layout>
    </>
    );
  };
  
  export default CRUD;