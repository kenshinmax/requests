import React from 'react';

import ManagerTasks from './ManagerTasks';
import Tasks from './Tasks';


const Section = () => {
    return (
        <div>
           <Tasks/>
           <ManagerTasks/>
        </div>
    )
}

export default Section;