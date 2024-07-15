import React,{useState} from "react";
import { useCallback } from "react";
import CustomInput from "../../../atoms/Input/Input";
import CustomButton from "../../../atoms/Button";
import List from "../../../atoms/List";


export const UseCallback=()=>{
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false)

    const getItems= useCallback  ( () => {
        return [number,number+1,number+2]
    },[number]);

    
    
    const theme = {
            backgroundColor:dark ? '#333' : '#FFF',
            color: dark ? '#FFF' : '#333' 
    }


    return(
        <div style={theme}>
            <CustomInput type="number" value={number} onChange={e =>setNumber(parseInt(e.target.value))}/>
            <CustomButton onClick={()=>setDark(prevDark => !prevDark)} label="Toggle Theme"/>
            <List getItems={getItems} />    
        </div>
    )
}
