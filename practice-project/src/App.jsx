import { use, useEffect, useState } from "react";
import { fetchPeople, fetchPerson } from "../data/fetcher";

function App() {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(null);
  const [id, setId] = useState(null);
  const [name, setName] = useState(
    () => JSON.parse(window.localStorage.getItem("name")) || "john",
  );

  function handleId(id) {
    setId(id);
  }

  useEffect(() => {
    window.localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  useEffect(() => {
    async function fetchP() {
      const res = await fetchPeople();
      setPeople(res);
    }
    fetchP();
  }, []);

  useEffect(() => {
    async function fetchPer() {
      const res = await fetchPerson(id);

      setPerson(res);
    }

    fetchPer();
    return () => setPerson(null);
  }, [id]);

  return (
    <>
      <h1>Effective People</h1>
      {people?.map((person) => (
        <button
          onClick={() => handleId(person.id)}
          style={{ margin: "10px", padding: "10px 20px", cursor: "pointer" }}
          key={person.id}
        >
          {person.name}
        </button>
      ))}
      {person && (
        <>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
          <p>Hobbies: {person.hobbies.join(",")}</p>
        </>
      )}
      <h2 style={{ margin: "10px" }}>Welcome, {name}</h2>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default App;
