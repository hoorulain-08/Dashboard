

import React from "react";
import manageverified from "../../assests/images/manageverified.svg";
import verifyuserIcon from "../../assests/images/verifyuserIcon.svg";

import Button from "@mui/material/Button";
import "../../assests/css/App.css";

import {
  Card,
  Table,
} from "reactstrap";
import { Grid, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import { SetVerifyBusinessData, SetViewData ,SetRemoveUserData} from "../setData/SetData";



import "../../assests/css/style.css";
import Approved from "./ApprovedDocs";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 714,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function Verify() {
  const [studentData, setStudentData] = useState([]);
  const [clk, setClk] = useState(false);

  const [delt, setDel] = useState(false);
  const [newb, setNewb] = useState(false);
  const [editb, setEdit] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [id, setID] = useState();
  const [object,setObject]=useState();
  const[delObj,setDelObj]=useState();
  const [name,setName]=useState();
 
const [saveview,setSave]=useState();
const [ViewAll ,setView]=useState(false);
const[load,setLoad]=useState(false);

  var chk = "apple";
 
  
  const [val, setVal] = useState("test");

  const callToDbHandler = async (payload) => {
    console.log("in call to db handler function ");
 
  };
  const goodResponseHandler = (response) => {


  
    setStudentData(response.legalDetailsByStatus);
 
  };
  const LoadDataApproved = () => {
    const payload = { ...SetVerifyBusinessData() };
    console.log("in load data approved");
    callToDbHandler(payload)
      .then((res) => {
        goodResponseHandler(res.successResponseData.payload[0]);
      })
      .catch((err) => {
        console.error(err);
        throw Error("Network response error");
      });
  };

  useEffect(() => {
    LoadDataApproved();
  }, []);

  function check(email) {

    setVal(email);

    setView(true);
   
  }
  function setnew() {
    setNewb(true);
  }
  function editbusiness() {
    setEdit(true);
  }
  function Delbusiness() {
    setDel(true);
  }
  function viewDetails(props){
  

    setSave(props);
  setView(props);
  }



  return (
    <>


<div className='dashboard-position'>
<div >
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
  


<div></div>

     {
      ViewAll?
      <Approved  saveview={saveview}/>:

      
        <div className="paper-pos">
          <Paper id="reg-tab-paper-dashboard">
            <div className="tab-head">
              <span style={{ display: "flex" }}>
                <div style={{ paddingLeft: "20px" }}>
                  {" "}
                  <img src={manageverified} id="mang-icon" />
                </div>
                <p id="manage-id"> Manage All  Verified Business</p>
              </span>
          

             
            </div>
            <div className="admin-tab-pos">
            {studentData.length ? (
              <Table id="students">
                <thead>
                  <tr>
                    <th>Sr.NO</th>
                    <th>Business Name</th>
                    <th>ID #</th>
                    <th>Status</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((info) => (
                    <>
                  
                      <tr>
                        <td>{info.id}</td>
                        <td>{info.registeredName}</td>
                        <td>{info.eid}</td>
                      
                        <td>{info.status}</td>
                        <td >
                             <Button  onClick={()=>viewDetails(info.id)} id="view-btn" >
                                  View All
                             </Button>
                            </td>
                       
                      </tr>
         
                    </>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div style={{paddingLeft:"500px",paddingTop:"50px"}}>
  <div className='load-spin'> </div>
</div>
            )}

            </div>
          </Paper>
        </div>

     }
      </div>
    </>
  );
}
