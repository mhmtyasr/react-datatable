import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Table } from "./tableComponent";

function App() {
  return (
    <Table
      onRowSelected={(e: any) => {
        console.log(e);
      }}
      dataSource={[
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },

        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
        },
      ]}
      columns={[
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "lastname",
          dataIndex: "lastname",
        },
        {
          title: "E mail",
          dataIndex: "email",
        },
      ]}
    ></Table>
  );
}

export default App;
