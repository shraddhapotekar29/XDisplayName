import React from "react"
import styles from "./DisplayName.module.css";
import { useState } from "react";

const DisplayName=()=>{
    const[name,setName]=useState("");
    const[sirName,setSirName]=useState("");
    const[showName,setShowName]=useState(false);


const submitFn=(e)=>{
   e.preventDefault();
//    console.log(name);
//    console.log(sirName);
if (name && sirName) {
    setShowName(true);
  } 
}

const validation=(nameVal)=>{
const regex=/^[a-zA-Z]+$/
 return regex.test(nameVal);
}
return(<div className={styles.mainDiv}><h1>Full Name Display</h1>
<form onSubmit={submitFn}>
    <label htmlFor="name">First Name:</label>
    <input type="text" id="name" value={name} onChange={(e) => {
            const value = e.target.value;
            if (validation(value)) {
              setName(value);
            }
          }} required/>
    <br />
    <label htmlFor="lName">Last Name:</label>
    <input type="text" id="lName" value={sirName} onChange={(e) => {
            const value = e.target.value;
            if (validation(value)) {
              setSirName(value);
            }
          }} required/>
    <br />
    <button type="submit">Submit</button>

    {showName&&<h3>Full Name: {name} {sirName}</h3>}
</form>
</div>)
}
export default DisplayName;