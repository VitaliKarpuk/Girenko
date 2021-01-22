import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

import './style.scss';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
};

const ContactForm = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <div className="form__title">Напишите нам</div>
      <Form.Item
        name={["user", "name"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder={"Ваше имя"}/>
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input placeholder={"Ваш e-mail"}/>
      </Form.Item>
      <Form.Item name={["user", "phone"]}>
        <Input placeholder={"Ваш телефон"} />
      </Form.Item>
      <Form.Item
        name={["user", "description"]}
      >
        <Input.TextArea placeholder={"Ваше сообщение"}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
