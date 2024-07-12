import React from "react";
import Label from "../Label/Label";
interface SelectFieldProps{
    value:string
    label:string
    id:string 
    options:{value:string; label:string}[];
    onChange:(event:React.ChangeEvent<HTMLSelectElement>)=>void;
}

export const SelectField:React.FC<SelectFieldProps>=({value,label,id,options,onChange})=>{
    return(
        <div>
            <Label htmlFor={id} text={label} />
            <select id={id} value={value} onChange={onChange}>
                {options.map((option)=>(
                    <option key={option.value} value={option.value}>
                        {option.label}  
                    </option>
                ))}
            </select>
        </div>
    );
};