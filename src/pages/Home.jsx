import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTask, Complited, DeletTask, EditTask, UnComplited } from "../TodoSlice";

const Home=()=>{
const[input, setInput]=useState("")
const[myid , setMyid]=useState("")
const[BtnStatus, setBtnStatus]=useState(true)

const mywork=useSelector((state)=>state.myTodo.task)
const dispatch=useDispatch();

const handleSubmit=()=>{
    dispatch(AddTask({id:Date.now() , work:input, status:false}));
    setInput("");
}

const deleteData=(id)=>{
    dispatch(DeletTask(id))
}

const EditData=(id , work)=>{
    setBtnStatus(false);
    setMyid(id);
    setInput(work)
}

const complition=(id, status)=>{
    if(status)
    {
        dispatch(UnComplited(id))
    }
    else{
        dispatch(Complited(id))
    }
}

const EditSave=()=>{
    dispatch(EditTask({id:myid, work:input}))
    setBtnStatus(true)
    setInput("")
}

let sno=0; 
const ans=mywork.map((key)=>{
    sno++;
    return(
        <>
       <tr>
        <td>{sno}</td>
        <td>{key.status?(<span style={{color:"red", textDecoration:"line-through"}}>{key.work}</span>)
        :(<span style={{color:"black", textDecoration:"none"}}>{key.work}</span>)}</td>
        <td><button onClick={()=>{complition(key.id, key.status)}}>{key.status?"Uncomplited" : "Complited"}</button></td>
        <td><button onClick={()=>{deleteData(key.id)}}>Delete</button></td>
        <td><button onClick={()=>{EditData(key.id , key.work)}}>Edit</button></td>
        </tr> 
        </>
    )
})


    return(
        <>
       <center>
        <h1>The Tool Kit App Home page</h1>
        Enter Your Task : <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        {BtnStatus?(<button onClick={handleSubmit}>Add</button>):(<button onClick={EditSave}>EditSave</button>)}
        <hr color="blue"/>
        <table bgcolor="pink" border="2px" width="500px" align="center">
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Task Name</th>
                    <th>Task Status</th>
                    <th>Task Delete</th>
                    <th>Task Edit</th>
                </tr>
                {ans}
            </thead>
        </table>
        <hr color="blue"/>
        </center> 
        </>
    )
}
export default Home;