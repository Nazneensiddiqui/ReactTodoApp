import axios from "axios";
import { useState } from "react";


const Search=()=>{
    const[order,setOrder]=useState("");
    const[mydata , setMydata]=useState([])

    const handleInput=(e)=>{
        let orderNo=e.target.value;
       setOrder(orderNo)
     
       let api=` http://localhost:3000/employee/?empno=${orderNo}`
       axios.get(api).then((res)=>{
           console.log(res.data);
           setMydata(res.data)
         })
        }
  let sno=0;
  const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
           <tr>
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
            <h1>Search Employee No...:</h1>
            <input type="text" placeholder="Type's Employee No....."value={order} onChange={handleInput} 
            style={{width:"300px", padding:"20px", fontSize:"20px",color:"green"}}/>
            <table border="2px" style={{marginTop:"50px", backgroundColor:"lightpink",color:"green"}}>
                <thead>
                    <tr>
                        <th>S. No.</th>
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
export default Search;