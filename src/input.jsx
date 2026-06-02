import "./input.css";
import { Button } from "./button.jsx";

export function Input() {
  return (
    <>
      <div className="inputModule">
        <h1>TodoInput</h1>

        <div className="inputContainer">
          <div className="input">
            <span>
              <img src="" alt="" />
            </span>
            <span>
              <input type="text" placeholder="New Todo" />
            </span>
          </div>
          {/* Button component */}
          <Button text="Add New Task" color="var(--sky-blue)" />
        </div>
      </div>
    </>
  );
}
