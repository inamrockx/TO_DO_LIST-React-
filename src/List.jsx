import "./List.css";
import { Button } from "./button.jsx";
import { Tasks } from "./tasks.jsx";


export function List() {
  return (
    <>
      <div className="listContainer">
        <h2>Todo List</h2>
        <div className="listMenu">
          <Button text="All" color="var(--sky-blue)" size='md'/>

          <Button text="Done" color="var(--sky-blue)" size='md'/>

          <Button text="Todo" color="var(--sky-blue)" size='md'/>
        </div>
        
      </div>

      {/* tasks list */}

      <div className="tasksContainer">

        

        <div className="del-btns">

          <Button text="Delete done tasks" color="#c01616e3" size='md'/>
          <Button text="Delete all tasks" color="#c01616e3" size='md'/>

        </div>

      </div>

      

    </>
  );
}
