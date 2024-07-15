import React,{useState,useMemo,useEffect} from "react";
import CustomInput from "../../../atoms/Input/Input";
import CustomButton from "../../../atoms/Button";

export const UseMemo=()=>{
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false)
    const doubleNumber=useMemo(()=>{
        return slowFunction(number)
    },[number])
    const themesStyles=useMemo(()=>{
        return{
            backgroundColor:dark ? 'black' : 'white',
            color: dark ? 'white' : 'black' 
        }
    },[dark]);

    useEffect(()=>{
        console.log("Theme Changed")
    },[themesStyles])

    return(
        <>
            <CustomInput type="number" value={number} onChange={e =>setNumber(parseInt(e.target.value))}/>
            <CustomButton onClick={()=>setDark(prevDark => !prevDark)} label="Change Theme"/>
            <div style={themesStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num: number){
    console.log('Calling Slow Function')
    for(let i=0;i<=1000000000;i++){}
    return num*2
}