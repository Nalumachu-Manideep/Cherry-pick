import React from "react";
import CustomInput from "../../atoms/Input/Input";

import CustomLabel from "../../atoms/Label/Label";

interface FormFieldProps{
    label : string;
    type: string ;
    id :string;
    value:string;
    htmlFor:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}


const FormField:React.FC<FormFieldProps>=({label,type,id,value,htmlFor,onChange})=>{
    return(
        <div className="form-field">
            <CustomLabel htmlFor={id} text={label} />
            <CustomInput type={type}  id={id} value={value} onChange={onChange} margin="dense"/>
        </div>
    );
}

export default FormField;