import React from "react";
import Table from 'react-bootstrap/Table';
const Tasks = () => {
  const data = [
        { id: "001", name: "PTO Request", status: "Open", dueDate: "Jan-01-2020" },
        { id: "002", name: "Supplimental Insurance Open Enrollment",  status: "Pending", dueDate: "Jan-12-2020" },
        { id: "003", name: "External Training Request",  status: "Closed", dueDate: "Jan-12-2020" },
        { id: "004", name: "View Offer Approval",  status: "In-Progress", dueDate: "Feb-02-2020" },
        { id: "005", name: "New Hire Manager Survey",  status: "In-Progress", dueDate: "Feb-12-2020" }
  ];
  
  var options = {
    valueNames: [ 'name', 'status' ]
  };


  const listItems = data.map((item) => 
         <tr>   
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.status}</td>
            <td>{item.dueDate}</td>
        </tr>
      );
     
 
  return ( 
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
           
       
           {listItems}
      
        </tbody>
        </Table>
  )
};

export default Tasks;
