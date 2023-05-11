const All_LegalEntity = process.env.REACT_APP_All_LegalEntity_URL;
const Profile_Data = process.env.REACT_APP_Get_Data_URL;
// console.log(process.env.REACT_APP_Get_Data_URL);
const LegalData = process.env.REACT_APP_Get_LegalData_URL;
const New_Business = process.env.REACT_APP_Get_New_Business_URL;
const Business_Status = process.env.REACT_APP_Business_Status_URL;
const Documents = process.env.REACT_APP_Documents_URL;
const Update = process.env.REACT_APP_Update_LegalData_URL;
// const Activity_URL = process.env.ACTIVITY_DETAILS_URL;
// const contact_URL = process.env.SUPPORT_URL;
// const verification_URL = process.env.VERIFICATION_URL
// ----------------------------------------------------------------------

export const header={
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
}



const getVerifyData = async (payload) => {

  const data = await fetch( All_LegalEntity, {
    method: "POST",
    headers: header,
    body: JSON.stringify(payload),
  })
  .then((response) => {
    console.log("executing first then ");
    if (response.status!=200) {
    //   setSuccess(true);

      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  })
  
  .catch(err => {
    console.error(err)
    return err
  });

  return data;
};


const getProfileData = async (payload) => {
  console.log("In main dashboard api calling ")
  console.log(Profile_Data);
  const data = await fetch(Profile_Data, {
    method: "POST",
    headers: header,
    body: JSON.stringify(payload),
  })
  .then((response) => {
    console.log("executing first then ");
    if (response.status!=200) {
    //   setSuccess(true);

      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  })
  
  .catch(err => {
    console.error(err)
    return err
  });

  return data;
};

const getViewData = async (payload) => {
console.log("in Api execution of getViewData or viewAll")
 console.log(LegalData)
  const data = await fetch(LegalData , {
   
    method: "POST",
    headers: header,
    body: JSON.stringify(payload),
  })
  .then((response) => {
    console.log("executing first then of edit.js api ");
    if (response.status!=200) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  })
  
  .catch(err => {
    console.error(err)
    return err
  });

  return data;
};



const UpdateData = async (payload) => {
  console.log("in Api execution of getViewData or viewAll")
   console.log(LegalData)
    const data = await fetch(Update , {
     
      method: "POST",
      headers: header,
      body: JSON.stringify(payload),
    })
    .then((response) => {
      console.log("executing first then of edit.js api ");
      if (response.status!=200) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
  
      return response.json();
    })
    
    .catch(err => {
      console.error(err)
      return err
    });
  
    return data;
  };









const signup = async (payload) => {
  const data = await fetch(New_Business, {
    method: "POST",
    headers: header,
    body: JSON.stringify(payload),
  }).then((response) => response.json()).catch(err => {
    console.error(err)
    return err
  });

  return data;
};

const getApprovedData = async (payload) => {
  const data = await fetch(Business_Status, {
    method: "POST",
    headers: header,
    body: JSON.stringify(payload),
  })
  .then((response) => {
    console.log("executing first then ");
    if (response.status!=200) {
    //   setSuccess(true);

      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  })
  
  .catch(err => {
    console.error(err)
    return err
  });

  return data;
};

const getApprovedDocData = async (payload) => {
  const data = await fetch(Documents, {
    method: "POST",
    headers: header,
    body: JSON.stringify(payload),
  })
  .then((response) => {
    console.log("executing first then  of get approved doc data ");
    if (response.status!=200) {
    //   setSuccess(true);

      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  })
  
  .catch(err => {
    console.error(err)
    return err
  });

  return data;
};






// ----------------------------------------------------------------------
export const api = {
  get: {
    getProfileData: (payload) => getProfileData(payload),
    getVerifyData: (payload) => getVerifyData(payload),
    getApprovedData: (payload) => getApprovedData(payload),
    getViewData: (payload) => getViewData(payload),
    UpdateData: (payload) =>   UpdateData(payload),
    getApprovedDocData:(payload)=>getApprovedDocData(payload),
  },
  registerUser: (payload) => signup(payload),

};

