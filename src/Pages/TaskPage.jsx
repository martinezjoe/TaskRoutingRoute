import React, { useState, useEffect } from "react";
import TaskComponent from "../components/task";
import TaskForm from "../components/taskForm";
import { LEVELS } from "../Models/levels.enum";
import { Task } from "../Models/task.class";

const TaskPage = () => {
  const defaultTask1 = new Task(
    "Example 1",
    "Description 1",
    false,
    LEVELS.NORMAL
  );

  const defaultTask2 = new Task(
    "Example 2",
    "Description 2",
    true,
    LEVELS.URGENT
  );

  const defaultTask3 = new Task(
    "Example 3",
    "Description 3",
    true,
    LEVELS.BLOCKING
  );

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Task State has been modified");

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  function completeTask(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;

    setTasks(tempTasks);
  }

  function deleteTask(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  function Table() {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col"> Title </th>
            <th scope="col"> Description </th>
            <th scope="col"> Priority </th>
            <th scope="col"> Actions </th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  }

  let tasksTable;

  if (tasks.length > 0) {
    tasksTable = <Table></Table>;
  } else {
    tasksTable = (
      <div>
        <h3> There are no tasks to show :( </h3>
        <h4> Please, create one </h4>
      </div>
    );
  }

  const loadingStyle = {
    color: "hotpink",
    fontSize: "30px",
    fontWeight: "bold",
  };

  return (
    <div className="task-container">
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Task is:</h5>
          </div>

          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", maxHeight: "400px", margin:'0 auto' }}
          >
            {loading ? (
              <p style={loadingStyle}> loading Task ... </p>
            ) : (
              tasksTable
            )}
          </div>
        </div>
      </div>

      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskPage;
