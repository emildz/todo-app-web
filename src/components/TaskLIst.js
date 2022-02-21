import { List } from "antd";
import { useEffect } from "react";
import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    fetch("http://localhost:3005/tasks")
      .then((response) => response.json())
      // .then(setTasks)
      .then((data) => setTasks(data))
      .catch(alert);
  }, []);

  return (
    <List
      className="task-list"
      bordered
      dataSource={tasks}
      renderItem={(item) => <Task item={item} setTasks={setTasks} />}
    />
  );
}
