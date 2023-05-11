import React, { useState } from "react";
// import "./PasswordShowHide.css";
// import "../App.css"
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';

const PasswordShowHide = ({ field, form }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = form.touched[field.name] && form.errors[field.name];
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(showHidePassword===false){
      setIcon(eye);      
      changeShowHidePassword(true);
    }
    else{
      setIcon(eyeOff);     
      changeShowHidePassword(false);
    }
  }

  return (
    <div style={{paddingLeft:"41px"}}>
    <div className="input-field">
   
      <input
        type={showHidePassword ? "text" : "password"}
        {...field}
        // className={hasError ? "input-error input-field" : "input-field"}
        
      />

<span onClick={handleToggle} ><Icon icon={icon} size={18} style={{opacity:"0.4"}} /></span>
    </div>
    </div>
  );
};

export default PasswordShowHide;
