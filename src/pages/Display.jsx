import { useState, useEffect } from "react";
import axios from "axios";

const Display=()=>{
    const [empData, setEmpData]=useState([])

const loadData=()=>{
    let api="http://localhost:3000/employee";
    axios.get(api).then((res)=>{
          setEmpData(res.data);
    })
}

useEffect(()=>{
    loadData();
}, [])

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
          
        </tr>
        </>
      )
})

    return(
        <>
       <center>
        <h1>The Tool Kit App Display page</h1>
        <table bgcolor="lightgreen" border="2px" width="700px" align="center">
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Employee No.</th>
                    <th>Employee Name</th>
                    <th>Employee City</th>
                    <th>Employee Salary</th>
                 
                    </tr>
                    {ans}
            </thead>
        </table>
        </center> 
        </>
    )
}
export default Display;