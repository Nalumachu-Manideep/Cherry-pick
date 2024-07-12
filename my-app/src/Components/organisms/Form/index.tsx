import React, { useEffect, useState } from "react";
import FormField from "../../molecules/FormFeild/index.tsx";
import CustomButton from "../../atoms/Button/index.tsx";
import { SelectField } from "../../atoms/Select/index.tsx";

const Form:React.FC=()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [option,setOption]=useState('');

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    if (name !== '') {
      console.log('Updated name: ', name);
    }
  }, [name]);

  useEffect(() => {
    if (email !== '') {
      console.log('Updated email: ', email);
    }
  }, [email]);

  useEffect(()=>{
    if(option!==''){
      console.log('Selected option is: ',option);
    }
  },[option])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', { name, email ,option});
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField 
        label="Name : " 
        type="text" 
        id="name" 
        htmlFor="name"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <FormField 
        label="Email : " 
        type="text" 
        htmlFor="email"
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <SelectField
        label="Profession"
        id="profession"
        value={option}
        options={[
          {value:'student', label:'Student'},
          {value:'employee',label:'Employee'}
        ]}
        onChange={(e)=>setOption(e.target.value)}

      />
      <CustomButton label="Get Result" type="submit" variant="contained" color="success" />
    </form>
  );
}

export default Form;
