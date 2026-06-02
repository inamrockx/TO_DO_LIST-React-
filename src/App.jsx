import "./App.css";
import { Button } from "./button.jsx";
import { Input } from "./input.jsx";
import { List } from "./list.jsx";

function App() {
  return (
    <>
      {/* Input section starts*/}
      <section className="container">
        <Input />
      </section>
      {/* Input section ends */}

      {/* List section starts */}
      <section className="list">
        <List/>
      </section>
      {/* List section ends */}
    </>
  );
}

export default App;
