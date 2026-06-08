import "./updateModal.css";
import { UpdateData } from "./update.js";
import { useState } from "react";

export function UpdateModal({id  }) {
    const [updatedTask , setUpdatedTask]=useState([]);
    const [isActive , setisActive]=useState('');

  return (
    <>
      <div className={`modal ${isActive && isActive }`}>
        <div className="input">
          <label htmlFor="textarea">Update Task</label>
          <textarea value={updatedTask} onChange={(e)=>{setUpdatedTask(e.target.value)}} name="textarea" id="textarea" rows={3}></textarea>
        </div>
        <div className="btns">
          <button onClick={()=>{
            updatedTask ?  UpdateData(id , updatedTask) : console.log('updatedTask is empty');
          }} className="btn blue">Submit</button>
          <button onClick={()=>{
            setisActive('hideModal');
          }} className="btn yellow">Cancel</button>
        </div>
      </div>
    </>
  );
}
