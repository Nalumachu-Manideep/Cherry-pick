/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import './Button.css';
import {Button as MuiButton,ButtonProps} from '@mui/material'

interface CustomButtonProps extends ButtonProps{
  label:string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label,...props}) => {
  return (
    <div>
      <MuiButton{...props} >
        {label}
      </MuiButton>
    </div>
  );
};

export default CustomButton;
