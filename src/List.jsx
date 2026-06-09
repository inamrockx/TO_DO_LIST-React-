import "./List.css";
import { Button } from "./button.jsx";
import { Tasks } from "./tasks.jsx";
import { useState, useEffect } from "react";
import { UpdateData } from "./update.js";
import { Del } from "./delete.js";


export function List({ data , refreshTasks, setEditingTask}) {
  const [filter, setFilter] = useState("all");
  const [checkedIds, setCheckedIds] = useState([]);

  // Sync checkboxes with db state when data shifts
  useEffect(() => {
    if (data) {
      const initialChecked = data.filter(task => task.done).map(task => task.id);
      setCheckedIds(initialChecked);
    }
  }, [data]);

  const handleToggleCheck = (id) => {
    setCheckedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleDoneClick = async () => {
    // Tasks that are checked in state but not yet saved as done in DB
    const newlyChecked = checkedIds.filter(id => {
      const task = data.find(t => t.id === id);
      return task && !task.done;
    });

    // Tasks that were done in DB but are unchecked in state
    const newlyUnchecked = data
      .filter(task => task.done && !checkedIds.includes(task.id))
      .map(task => task.id);

    if (newlyChecked.length > 0 || newlyUnchecked.length > 0) {
      const updates = [];
      newlyChecked.forEach(id => {
        updates.push(UpdateData(id, { done: true }));
      });
      newlyUnchecked.forEach(id => {
        updates.push(UpdateData(id, { done: false }));
      });

      await Promise.all(updates);
      refreshTasks();
    } else {
      // Pressed done button freely without changes -> toggle/set filter to done
      setFilter("done");
    }
  };

  const handleDeleteDone = async () => {
    if (!data) return;
    const doneTasks = data.filter(task => task.done);
    if (doneTasks.length > 0) {
      await Promise.all(doneTasks.map(task => Del(task.id)));
      refreshTasks();
    }
  };

  const handleDeleteAll = async () => {
    if (!data || data.length === 0) return;
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      await Promise.all(data.map(task => Del(task.id)));
      refreshTasks();
    }
  };

  // Filter tasks based on selected filter option
  const filteredData = data
    ? data.filter(task => {
        if (filter === "done") return task.done;
        if (filter === "todo") return !task.done;
        return true;
      })
    : [];

  return (
    <>
      <div className="listContainer">
        <h2>Todo List</h2>
        <div className="listMenu">
          <Button 
            text="All" 
            color={filter === "all" ? "var(--sky-blue)" : "#8c9ba5"} 
            size="md" 
            onClick={() => setFilter("all")}
          />

          <Button  
            text="Done" 
            color={filter === "done" ? "var(--sky-blue)" : "#8c9ba5"} 
            size="md" 
            onClick={handleDoneClick}
          />

          <Button 
            text="Todo" 
            color={filter === "todo" ? "var(--sky-blue)" : "#8c9ba5"} 
            size="md" 
            onClick={() => setFilter("todo")}
          />
        </div>
      </div>

      {/* tasks list */}

      <div className="tasksContainer">
        {filteredData.length > 0
          ? filteredData.map((getData) => (
              <Tasks 
                key={getData.id}
                data={getData} 
                refreshTasks={refreshTasks} 
                setEditingTask={setEditingTask} 
                isChecked={checkedIds.includes(getData.id)}
                onToggleCheck={() => handleToggleCheck(getData.id)}
              />
            ))
          : <p style={{ textAlign: "center", fontStyle: "italic", color: "#888", padding: "10px 0" }}>No tasks found</p>}

        <div className="del-btns">
          <Button onClick={handleDeleteDone} text="Delete done tasks" color="#c01616e3" size="md" />
          <Button onClick={handleDeleteAll} text="Delete all tasks" color="#c01616e3" size="md" />
        </div>
      </div>
    </>
  );
}
