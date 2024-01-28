import React, { useState } from 'react';
import { Row, Col, Card, Table, message, Button, Avatar, Typography, Form, Input, Popconfirm,Select,DatePicker } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;

const formInputs = [
  { name: "name", label: "Name", placeholder: "Enter name" },
  { name: "function", label: "Function", placeholder: "Enter function" },
  { name: "status", label: "Status", type: "select", options: ["online", "offline"] },
  { name: "employed", label: "Employed Date", type: "date" },
];


const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" shape="square" size={40}></Avatar>
          <div className="avatar-info">
            <Title level={5}>Michael John</Title>
            <p>michael@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Manager</Title>
          <p>Organization</p>
        </div>
      </>
    ),
    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/04/18</span>
        </div>
      </>
    ),
  },
];

function Tables() {
  const [formData, setFormData] = useState({});
  const [dataList, setDataList] = useState(data);

  const handleFormSubmit = () => {
    setDataList([...dataList, formData]);
    setFormData({});
    message.success("Data added successfully");
  };

  const handleDelete = (key) => {
    const updatedList = dataList.filter((item) => item.key !== key);
    setDataList(updatedList);
    message.success("Data deleted successfully");
  };

  const columns = [
    {
      title: "AUTHOR",
      dataIndex: "name",
      key: "name",
      width: "32%",
    },
    {
      title: "FUNCTION",
      dataIndex: "function",
      key: "function",
    },
    {
      title: "STATUS",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "EMPLOYED",
      key: "employed",
      dataIndex: "employed",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      render: (_, record) => (
        <>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this item?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handleEdit = (record) => {
    setFormData(record);
  };

  const formProps = {
    name: "crudForm",
    onFinish: handleFormSubmit,
  };

  return (
    <Row gutter={[24, 0]}>
      <Col xs="24" xl={24}>
        <Card bordered={false} className="circle-box table-space mb-24" title="Add Entity">
        <Form {...formProps}>
  {formInputs.map((input) => (
    <Form.Item key={input.name} label={input.label} name={input.name} initialValue={formData[input.name]}>
      {input.type === "select" ? (
        <Select placeholder={input.placeholder} onChange={(value) => setFormData({ ...formData, [input.name]: value })}>
          {input.options.map((option) => (
            <Select.Option key={option} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
      ) : input.type === "date" ? (
        <DatePicker
          style={{ width: "100%" }}
          placeholder={input.placeholder}
          onChange={(date, dateString) => setFormData({ ...formData, [input.name]: dateString })}
        />
      ) : (
        <Input placeholder={input.placeholder} onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })} />
      )}
    </Form.Item>
  ))}
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Save
    </Button>
  </Form.Item>
</Form>

        </Card>

        <Card bordered={false} className="circle-box table-space mb-24" title="Entity List">
          <div className="table-responsive">
            <Table
              columns={columns}
              dataSource={dataList}
              pagination={false}
              className="ant-border-space"
            />
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default Tables;
