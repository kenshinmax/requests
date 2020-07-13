import React from 'react';

const List = () => {
    return (
        <div class="card" id="list" data-list='{"valueNames": ["name"], 
        "page": 3, "pagination": {"paginationClass": 
        "list-pagination"}}'>

            <ul className="list">
                <li className="name">Casey Fyfe</li>
                <li className="name">Jane Roe</li>
                <li className="name">Casey Fyfe</li>
                <li className="name">Jane Roe</li>
            </ul>


            <ul className="list-pagination"></ul> 
        </div>
        )    
} 
export default List;
    