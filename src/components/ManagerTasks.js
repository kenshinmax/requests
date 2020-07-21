import React from 'react';

const ManagerTasks = () => {
    return (
 
<div className="col-12">


<div className="card card-fill">
  <div className="card-header">

    
    <h4 className="card-header-title">
      Tasks
    </h4>

    
    <a className="small" href="#!">View all</a>

  </div>
  <div className="card-body">

    <div className="list-group list-group-flush list-group-activity my-n3">
      <div className="list-group-item">
        <div className="row">
          <div className="col-auto">

          
            <div className="avatar avatar-sm">
              <div className="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary">
                <i className="icon-envelope-alt"></i>
              </div>
            </div>

          </div>
          <div className="col ml-n2">

           
            <h5 className="mb-1">
             PTO Request - Anna Seymour
            </h5>

           
            <p className="small text-gray-700 mb-0">
             Please review task
            </p>

            
            <small className="text-muted">
              2m ago
            </small>

          </div>
          
        </div> 
      </div>
      <div className="list-group-item">
        <div className="row">
          <div className="col-auto">

        
            <div className="avatar avatar-sm">
              <div className="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary">
               <i className="icon-folder-close-alt"></i>
              </div>
            </div>

          </div>
          <div className="col ml-n2">

       
            <h5 className="mb-1">
              Supplimental Insurance Enrollment
            </h5>

   
            <p className="small text-gray-700 mb-0">
              Looks like there might be a new theme soon.
            </p>

            
            <small className="text-muted">
              2h ago
            </small>

          </div>
        </div> 
      </div>
      <div className="list-group-item">
        <div className="row">
          <div className="col-auto">

            <div className="avatar avatar-sm">
              <div className="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary">
               <i className="icon-download"></i>
              </div>
            </div>

          </div>
          <div className="col ml-n2">

          
            <h5 className="mb-1">
              Dashkit 1.5.0 was deployed.
            </h5>

          
            <p className="small text-gray-700 mb-0">
              A successful to deploy to production was executed.
            </p>

          
            <small className="text-muted">
              2m ago
            </small>

          </div>
        </div> 
      </div>
    </div>

  </div>
</div>

</div>
     

    )
}

export default ManagerTasks;