import { useEffect, useState } from "react";
import "./App.css";

export function App() {
  const [notes, setNotes] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNote = async () => {
    // TODO: Make POST request to json-server
    try {
      const result = await fetch("http://localhost:3000/notes", {
        method: "POST",
        body: JSON.stringify({
          text: currentText,
        }),
      });
      if (!result.ok) throw new Error(result.statusText);

      const json = await result.json();
      const newId = json.id;

      setCurrentText("");
      setNotes([...notes, { id: newId, text: currentText }]);
    } catch (error) {
      setError(`Could not create note: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    setLoading(true);
    setError(null);
    // TODO: Make DELETE request to json-server
    try {
      const result = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "DELETE",
      });
      if (!result.ok) throw new Error(result.statusText);

      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      setError(`Could not delete note: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:3000/notes");
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setNotes(json);
      } catch (err) {
        setError(`Could not get notes:  ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      {loading && <p style={{ color: "green" }}>loading ...</p>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {!loading && error === null && (
        <>
          {notes.length > 0 ? (
            <div className="notes-container">
              {notes.map((note) => (
                <div key={note.id}>
                  <p>{note.text}</p>
                  <button onClick={() => deleteNote(note.id)}>X</button>
                </div>
              ))}
            </div>
          ) : (
            <p>No notes available</p>
          )}

          <textarea
            placeholder="Type your note here"
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
          ></textarea>

          <button onClick={createNote}>Save Note</button>
        </>
      )}
    </div>
  );
}
