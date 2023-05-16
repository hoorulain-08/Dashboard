

// import React from 'react';
// import {SetProfileData,SetViewData} from "../setData/SetData";
// import { api } from "../API/Services";
// import Edit from './Edit';
// import "../../assests/css/App.css";
// import { useState,useEffect } from 'react';
// const EditApi = (props) => {
// console.log("in EditApi function ");
// console.log({props});

//     const [view,setView]=useState(props.object);
//     const[fname,setFname]=useState("red");
//     const[lname,setLname]=useState(props.color);
//     const[eid,setEid]=useState();
//     const[incop,setIncop]=useState();
//     const[mob,setMob]=useState();
//     const[mail,setMail]=useState();
//     const[country,setCountry]=useState();
//     const[code,setCode]=useState();
//     const[address,setAddress]=useState();
//     const [company ,setCompany]=useState();
//     const [userId,setUserid]=useState();
//     const[getRes,setGet]=useState();
//     const [load,setLoad]=useState(false);

//     const goodResponseHandler = (response) => {
 
 
//         console.log({ response });
//         setGet(response)
    
//         setFname(response.legalEntity.firstName);
//         setLname(response.legalEntity.lastName);
//         setUserid(response.legalEntity.userId);
//         setEid(response.identityStore.eid);
//         setIncop(response.legalEntity.registrationNumber);
//         setCompany(response.legalEntity.registeredName);
//         setMob(response.contactMethod.telephonic.mobileNumber);
//         setMail(response.legalEntity.email);
//         setCountry(response.contactMethod.physicalContact.country);
//         setCode(response.contactMethod.physicalContact.zipCode);
//         setAddress(response.contactMethod.physicalContact.address);
  
//         setLoad(true);
//         console
      
    
//       };
//       const callToDbHandler = async (payload) => {
//         console.log("editAPI in call to db handler function ");
//         const response = await api.get.getViewData(payload);
//         console.log("editApi fetched payoad is this" + response);
//         return response;
//       };
    
//           function LoadEditData(){
//             console.log("hello world");
//      console.log({props});
//           // const req= {...SetUpdateProfileData(props.object)};
//           const payload = { ...SetViewData(view) };
//           console.log({payload})
//           callToDbHandler(payload)
//             .then((res) => {
//               goodResponseHandler(res.successResponseData.payload);
//             })
//             .catch((err) => {
//               console.error(err);
//               throw Error("view Network response error");
//             });
    
         
    
//           }
//           const onSubmit=(values)=>{
    
//     console.log("in onSubmit function");
//     console.log({values})
            
//           }
        
          
//     useEffect(()=>{
    
//       LoadEditData()
    
//     }
    
//     ,[])
    




//   return (
//     <div>
//     {
    
//         load?
//         <Edit
//         firstName={fname}
//         lastName={lname}
//         incorp={incop}
//         Mobile={mob}
//         email={mail}
//         country={country}
//         code={code}
//         address={address}
//         company={company}
//         id={userId}
//         eid={eid}
//         />
//         :
//               <div style={{paddingLeft:"800px",paddingTop:"50px"}}>
//   <div className='load-spin'> </div>
// </div>
//     }  
//     </div>
//   )
// }

// export default EditApi
