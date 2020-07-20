import React from "react";

const Tasks = () => {
  const products = [
        { id: "001", name: "PTO Request", status: "Open", dueDate: "Jan-01-2020" },
        { id: "002", name: "Supplimental Insurance Open Enrollment",  status: "Pending", dueDate: "Jan-12-2020" },
        { id: "003", name: "External Training Request",  status: "Closed", dueDate: "Jan-12-2020" },
        { id: "004", name: "View Offer Approval",  status: "In-Progress", dueDate: "Feb-02-2020" },
        { id: "005", name: "New Hire Manager Survey",  status: "In-Progress", dueDate: "Feb-12-2020" }
  ];
  const columns = [
    {
      dataField: "id",
      text: "Ref #",
      sort: true
    },
    {
      dataField: "name",
      text: "Employee Name"
    },
    {
        dataField: "status",
        text: "Status"
      },
    {
      dataField: "dueDate",
      text: "Due Date",
    },
  ];
  return <BootstrapTable keyField="id" data={products} columns={columns}  />;
};

export default Tasks;
