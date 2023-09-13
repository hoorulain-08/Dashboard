import React from 'react'

export default function Email (){
  const header={
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
  


  const getVerifyData = async (payload) => {

    const data = await fetch( "http://localhost:5000/api/data", {
      method: "POST",
      headers: header,
      // body: JSON.stringify(payload),
    })
    .then((response) => {
      console.log("executing first then ");
      console.log(response)
      if (response.status!=200) {
      //   setSuccess(true);
  
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      console.log("here is data here");
      console.log(response.json());
  
      return response.json();
    })
    
    .catch(err => {
      console.error(err)
      return err
    });
  
    return data;
  };
  


  return (
    <div>
        <h1 style={{paddingTop:"50px",paddingLeft:"265px"}}> 
            Your Emails are here 
            <button onClick={getVerifyData}>
             Press Here
            </button>
            </h1></div>
  )
}
