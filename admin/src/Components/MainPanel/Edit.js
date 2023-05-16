


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

import daraz from  "../../assests/images/daraz.svg"
import add from "../../assests/images/addIcon.svg";
import save from "../../assests/images/save.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState,useEffect } from 'react';

  import { Grid, Paper, Link } from "@material-ui/core";

import "../../assests/css/App.css";
// import {SetUpdateProfileData} from  "../setData/SetData";
import Swal from 'sweetalert2';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
//   padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width:"400px",
  height:"40px",
 
  
  
}));
const Add = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
  //   padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"784px",
    height:"134px",
  
    
  }));







  // import { AuthContext } from "../ContextApi/ContextApi";
  import { useContext } from "react";
  import axios, { post } from "axios"; 
export default function Edit(props) {
  
  const [view,setView]=useState(props.object);
  const[fname,setFname]=useState(props.firstName);
  const[lname,setLname]=useState(props.lastName);
  const[eid,setEid]=useState(props.eid);
  const[incop,setIncop]=useState(props.incorp);
  const[mob,setMob]=useState(props.Mobile);
  const[mail,setMail]=useState(props.email);
  const[country,setCountry]=useState(props.country);
  const[code,setCode]=useState(props.code);
  const[address,setAddress]=useState(props.address);
  const [company ,setCompany]=useState(props.company);
  const [userId,setUserid]=useState(props.id);
  const[getRes,setGet]=useState();
  const [load,setLoad]=useState(true);
  // const {counter, setCounter} = useContext(AuthContext);
  const {show ,setShow}=useState(false);
  var test=""
    const formData = new FormData();
  
    const initialValues = {
      
      userId,
        mail,
        fname,
        lname,
        incop,
        mob,
        country,
        code,
        company,
        address
      
      };

        
        // password: Yup.string().required("Required"),
      
    
  
//       const onSubmit=(values)=>{

// console.log("in onSubmit function");
// console.log({values})
        
//       }
    
      const callToDbHandler = async (payload) => {
        console.log("after API calling of edit  in call to db handler function   the sending data is here ");
       console.log({payload});
       console.log("response from api after sending data is here below")
       
      
      };
    
          function LoadEditData(){
            console.log("hello world");
     console.log({props});
          // const req= {...SetUpdateProfileData(props.object)};
          const payload = { ...SetViewData(view) };
          console.log({payload})
          callToDbHandler(payload)
            .then((res) => {
              goodResponseHandler(res.successResponseData.payload);
            })
            .catch((err) => {
              console.error(err);
              throw Error("view Network response error");
            });
    
         
    
          }
          const onSubmit=(values)=>{
// setShow(true);
    
    console.log(" after edit data in onSubmit function");
    console.log({values})
            const req={...SetUpdateProfileData(values)};

           


            var requestdata = JSON.stringify(req);

    formData.append("request", requestdata);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    };
    console.log("forma dataaaa", formData);

    axios
      .post("http://192.168.18.222:30031/updateLegalEntity", formData, config)
      .then((res) => {


  if (res.data.successResponseData.status != null) {
        Swal.fire({
          title: " Edited Information!",
          text: "Your Edited Information has saved!",
          icon: 'success',
          confirmButtonText: 'Close'
        })
        setCounter(5);
      }
    })

    .catch((err) => {
      console.error(err);
      throw Error("view Network response error");
       
      });
          
 



















              



          }
        



  return (
    <>
   <div className='dashboard-position'>
   <div className="paper-pos">
   
    <Paper id="reg-verify-dashboard">

    <div className="tab-head">
       <span style={{display:"flex"}}>
      <div style={{paddingLeft:"41px"}}>  <img src={daraz} id="mang-icon"/>
    
      </div> 
    <p id="manage-id">  Compose</p>
      </span>
        {/* <h2 className="tab-heading">Managae all verified Businesses</h2> */}
      
       <div className="t-edit-pos">
         <p className="t"> 
          <img src={add} className="img-add"/>

          &nbsp; Edit and Share</p></div>
       </div>

{      
<div>
       <Formik
             initialValues={initialValues}
             onSubmit={onSubmit}
            
          >
            {(props) => (
            
              <Form>
            <>
              {/* <h4>value of f name is : {incop}</h4> */}
              
              
 
    <Box sx={{ flexGrow: 1 }} style={{paddingTop:"60px",paddingLeft:"100px"}}>
    
 
   

      
    





     



<Grid container  columns={16} >
<div style={{paddingLeft:"100px"}}> 
  <Grid item xs={8}>
  </Grid>
 </div>
 
</Grid>
<Grid container  columns={16} >
<div > 
  <Grid item xs={8}>
  <label className='label'>Write your Email</label>
    <Add>
    <Field type="adress" name="address" className="in-add" 
    value={props.values.address}
       onChange={props.handleChange}
    />
                  
    </Add>
  </Grid>
 </div>
</Grid>
 <div className="t-btn-pos">
         <p className="butn"> 
      <span style={{display:"flex"}}> 
      <img src={save} className="save-img-add"/>

          &nbsp; <Button id="save-btn"
                      disabled={props.isSubmitting}
                      type="submit"
                   
                      
                      
                      >
            <span id='save'> Send</span> 
          </Button>
          </span>
          
       </p></div>

    </Box>
              
    </>
    </Form>
            )}
          </Formik>
          
</div>
}

    </Paper>


    
    </div>
    
    </div>

    
    </>
  );
}
