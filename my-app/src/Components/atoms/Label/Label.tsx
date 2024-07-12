import React from "react";
import { FormLabel,FormLabelProps as MuiFormLabelProps } from "@mui/material";
interface CustomLabelProps extends MuiFormLabelProps{
    text: string;
    
}

const CustomLabel=({text,...props}:CustomLabelProps)=>{
    return <FormLabel {...props}> {text} </FormLabel>
}
    

export default CustomLabel;