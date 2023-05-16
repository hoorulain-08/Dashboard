import React from 'react';
import {
    Card
  
  } from "reactstrap";
  import verifyuserIcon from "../../assests/images/verifyuserIcon.svg";
  import "../../assests/css/style.css";

 function TableHeader() {
  return (
    <div className='dashboard-position'>
       <div className="tab-pos">
        <div className="card-pos">
          <Card className="verify-header">
            <div
              style={{
                paddingTop: "62px",
                display: "flex",
                paddingLeft: "27px",
              }}
            >
              <img src={verifyuserIcon} className="verifyuser" />
              <h2 className="check">Verified Businesses </h2>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TableHeader
