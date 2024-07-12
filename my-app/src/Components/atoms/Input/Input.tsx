import React from 'react';
import {Input,InputProps as MuiInputProps} from '@mui/material'
interface CustomInputProps extends MuiInputProps {
 type:string;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, ...props }) => {
  return <Input type={type} {...props} />;
};

export default CustomInput;
