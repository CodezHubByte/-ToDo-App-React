import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [tasks, setTasks] = useState([]);
  console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setTasks(data);
    };
    fetchData();
  }, [url]);

  return tasks;
};

export default useFetch;
