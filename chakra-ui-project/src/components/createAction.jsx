import { redirect } from "react-router-dom";

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") !== null,
  };
  console.log(task);
  return redirect("/");
};
