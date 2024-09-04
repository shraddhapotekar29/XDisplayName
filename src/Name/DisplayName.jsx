import React from "react"
import styles from "./DisplayName.module.css";
import { useState } from "react";

const DisplayName=()=>{
    const[name,setName]=useState("");
    const[sirName,setSirName]=useState("");
    const[showName,setShowName]=useState(false);

const submitFn=(e)=>{
   e.preventDefault();
// if (name && sirName) {
    setShowName(true);
//   } 
}


return(<div className={styles.mainDiv}><h1>Full Name Display</h1>
<form onSubmit={submitFn}>
    <label htmlFor="name">First Name:</label>
    <input type="text" id="name" value={name} onChange={(e) => {
              setName(e.target.value);
          }} required/>
    <br />
    <label htmlFor="lName">Last Name:</label>
    <input type="text" id="lName" value={sirName} onChange={(e) => {
              setSirName(e.target.value);
          }} required/>
    <br />
    <button type="submit">Submit</button>
</form>
{showName&&<h3>Full Name: {name} {sirName}</h3>}
</div>)
}
export default DisplayName;


