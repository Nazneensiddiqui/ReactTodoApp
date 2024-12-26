import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Update=()=>{
  const [empData, setEmpData]=useState([])
const navigate=useNavigate();
const loadData=()=>{
    let api="http://localhost:3000/employee";
    axios.get(api).then((res)=>{
          setEmpData(res.data);
    })
}

useEffect(()=>{
    loadData();
}, [])

const deletData=(id)=>{
  let api=`http://localhost:3000/employee/${id}`;
  axios.delete(api).then((res)=>{
    alert("Data Succesefully Delete")
    loadData()
  })
}

const editData=(id)=>{
    navigate(`/EditData/${id}`)
}

let sno=0;
const ans=empData.map((key)=>{
      sno++;
      return(
        <>
        <tr align="center">
            <td>{sno}</td>
            <td>{key.empno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.salary}</td>
            <td><button onClick={()=>{deletData(key.id)}}>Delete</button>
            <button onClick={()=>{editData(key.id)}}>Edit</button></td>
          
        </tr>
        </>
      )
})


    return(
        <>
       <center>
        <h1>The Tool Kit App Update page </h1>
      
        <table bgcolor="lightgreen" border="2px" width="700px" align="center">
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Employee No.</th>
                    <th>Employee Name</th>
                    <th>Employee City</th>
                    <th>Employee Salary</th>
                    <th>Action</th>
                 
                    </tr>
                    {ans}
            </thead>
        </table>
        </center> 
        </>
    )
}
export default Update;