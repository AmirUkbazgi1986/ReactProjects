const API_URL = "https://react-fast-pizza-api.jonas.io/api";

export async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`);
    if (!res.ok) throw new Error("Failed getting menu");
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}
