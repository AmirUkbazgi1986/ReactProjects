export const tasksLoader = async () => {
  const res = await fetch("http://localhost:4000/tasks");
  return res.json();
};
