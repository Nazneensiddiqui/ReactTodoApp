import { useState } from "react"

const Random=()=>{
    const[bgcolor , setBgcolor]=useState("#ffffff");

const changeColor=()=>{
    setBgcolor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
} 


    return(
        <>
        <center>
            <h1>The Random Change Color Progaram </h1>
            <div style={{width:"100%", height:"500px", textAlign:"center" ,  backgroundColor: bgcolor }}>
                <button onClick={changeColor} style={{padding:"10px 20px" , fontSize:"16px"}}>
                    change_color
                </button>
            </div>
        </center>
   <span style={{color:"gold"}}>&#9733;</span>
  &#9733;
        </>
    )
}
export default Random