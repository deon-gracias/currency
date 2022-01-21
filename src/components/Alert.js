import { Snackbar } from '@material-ui/core';
import React from 'react';
import {CryptoState} from "./Cryptocontext"
import MuiAlert from "@material-ui/lab/Alert"
const  Alert = () => {
    const {alert, setAlert} = CryptoState()

    const handleClose=(event, reason)=>{
        if (reason==="clickaway"){
            return;
        }
        setAlert({open:false})
    }
  return <Snackbar>
      
      <MuiAlert
      onClose={handleClose}
      elevation={10}
      variant="filled"
      severity={alert.type}
      >{alert.message}
  </MuiAlert>
  </Snackbar>
};

export default Alert;
