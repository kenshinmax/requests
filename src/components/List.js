import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const List = () => {
    return (
        <div className="card" id="list" data-list='{"valueNames": ["name"], 
        "page": 3, "pagination": {"paginationClass": 
        "list-pagination"}}'>
        <ListGroup>
          
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
         </ListGroup>


            
        </div>
        )    
} 
export default List;
    