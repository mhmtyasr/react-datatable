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
          isMarried: true,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: true,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: true,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },

        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
        },
        {
          name: "ali",
          lastname: "cevik",
          email: "email",
          isMarried: false,
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
        {
          title: "Evli mi ?",
          dataIndex: "isMarried",
        },
      ]}
    ></Table>
  );
}

export default App;
