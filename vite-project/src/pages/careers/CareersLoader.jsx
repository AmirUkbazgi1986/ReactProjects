// loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  if (!res.ok) {
    throw new Error("Could not fetch careers");
  }
  return res.json();
};
