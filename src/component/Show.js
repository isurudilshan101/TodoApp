import React from "react";
import { useState } from "react";
import { List, Typography, Divider } from "antd";

export default function Show(props) {
  console.log(props.data);

  return (
    <div className="container">
      <h1>SHOW MY TODOS</h1>

      <List
        bordered
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark> </Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
}
