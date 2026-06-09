import "./updateModal.css";
import { UpdateData } from "./update.js";
import { useState } from "react";

export function UpdateModal({ task, onClose, refreshTasks }) {
    const [updatedTask , setUpdatedTask]=useState(task.task);

  return (
    <div className="modal-backdrop" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal">
        <div className="input">
          <label htmlFor="textarea">Update Task</label>
          <textarea value={updatedTask} onChange={(e)=>{setUpdatedTask(e.target.value)}} name="textarea" id="textarea" rows={3}></textarea>
        </div>
        <div className="btns">
          <button onClick={async ()=>{
            if (updatedTask) {
              await UpdateData(task.id , updatedTask);
              refreshTasks();
              onClose();
            } else {
              console.log('updatedTask is empty');
            }
          }} className="btn blue">Submit</button>
          <button onClick={onClose} className="btn yellow">Cancel</button>
        </div>
      </div>
    </div>
  );
}
