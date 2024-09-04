import React from "react"
import styles from "./DisplayName.module.css";
import { useState } from "react";

const DisplayName=()=>{
    const[name,setName]=useState("");
    const[sirName,setSirName]=useState("");
    const[showName,setShowName]=useState(false);


const submitFn=(e)=>{
   e.preventDefault();
   return true;
}

const validation=(nameVal)=>{
const regex=/^[a-zA-Z]+$/
 return regex.test(nameVal);
}
return(<div className={styles.mainDiv}><h1>Full Name Display</h1>
<form onSubmit={(e)=>{if(submitFn(e)){ setShowName(true)}}}>
    <label htmlFor="name">First Name:</label>
    <input type="text" id="name" onChange={(e)=>{if(validation(e.target.value)){setName(e.target.value)}}} required/>
    <br />
    <label htmlFor="lName">Last Name:</label>
    <input type="text" id="lName" onChange={(e)=>{if(validation(e.target.value)){setSirName(e.target.value)}}} required/>
    <br />
    <button type="submit">Submit</button>

    {showName&&<h3>Full Name: {name} {sirName}</h3>}
</form>
</div>)
}
export default DisplayName;