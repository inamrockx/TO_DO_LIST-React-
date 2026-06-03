import "./App.css";
import { useState, useEffect } from "react";
import { Input } from "./input.jsx";
import { List } from "./List.jsx";
import { FetchingData } from "./fetchdata.js";

function App() {
  const [data, setData] = useState("");
  // fetching data
  useEffect(() => {
    FetchingData().then((getData) => {
      getData ? setData(getData.task) : console.log("getData is empty");
    });
  }, []);

  return (
    <>
      {/* Input section starts*/}
      <section className="container">
        <h1>{data}</h1>
        <Input />
      </section>
      {/* Input section ends */}

      {/* List section starts */}
      <section className="list">
        <List />
      </section>
      {/* List section ends */}
    </>
  );
}

export default App;
