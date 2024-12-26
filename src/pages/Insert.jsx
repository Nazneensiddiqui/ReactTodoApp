import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Insert=()=>{
    const[input, setInput]=useState("");
    const navigate=useNavigate();

    const handlInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values , [name]:value}))
    }

    const handleSubmit=()=>{
        let api="http://localhost:3000/employee";
        axios.post(api,input).then((res)=>{
            console.log(res.data);
            alert("Data Save To Json Server")
            navigate("/display")
        })
    }



    return(
        <>
       <center>
        <h1>The Tool Kit App Insert page</h1>
        <h2> Employees Form</h2>
        Enter Employee No. : <input type="text" name="empno"  onChange={handlInput}/><br/><br/>
        Enter Employee Name : <input type="text" name="name" onChange={handlInput}/><br/><br/>
        Enter Employee City : <input type="text" name="city" onChange={handlInput}/><br/><br/>
        Enter Employee Salary: <input type="text" name="salary" onChange={handlInput}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        </center> 
        </>
    )
}
export default Insert;