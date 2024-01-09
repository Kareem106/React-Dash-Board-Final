import { createContext, useState } from "react";
import axios from "axios";
export const LogInContext = createContext();
export default function LogInProvider({ children }) {
  const [token, setToken] = useState(null);
  const [validationErr, setValidationErr] = useState(null);
  const logInHandler = ({ email, password }) => {
    let config = {
      method: 'post',
      url: 'https://clinic-api.appssquare.com/api/admin/login',
      data : {email,password}
    };
    axios.request(config)
    .then((response) => {
      console.log(response.data);
      if(response.status===200){
        setToken(response.data.token);
        setValidationErr(null);
      }
    }).catch((err)=>{
      console.log(err);
        setValidationErr(err.response.data.message);
    });
  };
  const LogOut=()=>{
    setToken(null);
  }
  const clearErr = () => {
    setValidationErr(null);
  };
  const values = {
    token,
    logInHandler,
    validationErr,
    clearErr,
    LogOut
  };
  return <LogInContext.Provider value={values}>{children}</LogInContext.Provider>;
}
