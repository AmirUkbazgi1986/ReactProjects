export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw new Error("Could not find the career ");
  }
  return res.json();
};
