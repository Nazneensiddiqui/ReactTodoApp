import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditData=()=>{
    const{myid}=useParams()
const [empData, setEmpData]=useState({})
const navigate=useNavigate()

const loadData=()=>{
    let api=` http://localhost:3000/employee/${myid}`
    axios.get(api).then((res)=>{
          setEmpData(res.data)
    })
}
useEffect(()=>{
    loadData()
},[])


const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setEmpData(values=>({...values , [name]:value}))

}
const handleSubmit=()=>{
    let api=` http://localhost:3000/employee/${myid}`
    axios.put(api,empData).then((res)=>{
        console.log(res.data)
        setEmpData({
            empno:"",
            name:"",
            city:"",
            salary:""
        })
  navigate("/update")
    })  
}

    return(

        <>
       <center>
        <h1>The EditData Page : {myid}</h1>
        Employee No.    : <input type="text" name="empno" value={empData.empno} onChange={handleInput}/><br/><br/>
        Employee Name   : <input type="text" name="name" value={empData.name}  onChange={handleInput}/><br/><br/>
        Employee City   : <input type="text" name="city" value={empData.city}  onChange={handleInput}/><br/><br/>
        Employee Salary : <input type="text" name="salary" value={empData.salary} onChange={handleInput}/><br/><br/>
        <button onClick={handleSubmit}>Update Save</button>
        </center> 
        </>
    )
}
export default EditData;