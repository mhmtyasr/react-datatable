# Data Tables

# Table of Contents

  - [**Example**](#Example)
  - [**Prop Types**](#prop-types)

## Example

[**Live implementation**](https://react-datatable-flame.vercel.app/)

## Getting Started


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

### Prop Types


| Property      |     Type     | Required? | Description                       |
| :------------ | :----------: | :-------: | :-------------------------------- |
| dataSource    |   object[]   |    yes    | Data record array to be displayed |
| columns       | ColumProps[] |    yes    | Columns of table                  |
| onRowSelected |   object[]   |    no     | Return selected Row data          |
| className     |   string[]   |    no     |                                   |
| style         |   string[]   |    no     |                                   |
