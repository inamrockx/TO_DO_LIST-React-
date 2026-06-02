import { Button } from "./button.jsx";
import "./List.css";

export function List() {
  return (
    <>
      <div className="listContainer">
        <h2>Todo List</h2>
        <div className="listMenu">
          <Button text="All" color="var(--sky-blue)" size='lg' />

          <Button text="Done" color="var(--sky-blue)" size='lg'/>

          <Button text="Todo" color="var(--sky-blue)" size='lg' />
        </div>
      </div>
    </>
  );
}
