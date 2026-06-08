import "./App.css";
import { useState, useEffect } from "react";
import { Input } from "./input.jsx";
import { List } from "./List.jsx";
import { FetchingData } from "./fetchdata.js";
import {UpdateModal} from "./updateModal.jsx"

function App() {
  const [data, setData] = useState([]);
  // fetching data
  useEffect(() => {
    FetchingData().then((getData) => {
      getData ? setData(getData) : console.log("getData is empty");
    });
  }, []);

  const refreshTasks = () => {
    FetchingData().then((getData) => {
      if (getData) setData(getData);
    });
  };


  return (
    <>
      {/* Input section starts*/}
      <section className="container">
        <Input addNewTask={refreshTasks} />
      </section>
      {/* Input section ends */}

      {/* List section starts */}
      <section className="list">
        <List data={data} refreshTasks={refreshTasks}  />
        <UpdateModal/>
        
      </section>
      {/* List section ends */}

    </>
  );
}

export default App;
