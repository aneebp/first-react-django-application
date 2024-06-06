import { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/note";
import '../styles/home.css';

function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const res = await api.get("api/notes/");
      setNotes(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Failed to fetch notes:", err);
      setError(err.message); // Set error message
    }
  };

  const deleteNotes = async (id) => {
    try {
      const res = await api.delete(`api/notes/delete/${id}/`);
      if (res.status === 204) {
        alert("Note is Deleted");
      } else {
        alert("Failed to delete note");
      }
      getNotes();
    } catch (err) {
      console.error("Failed to delete note:", err);
      setError(err.message); // Set error message
    }
  };

  const createNotes = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("api/notes/", { title, content });
      if (res.status === 201) {
        alert("Note created");
        setTitle("");
        setContent("");
      } else {
        alert("Failed to create note");
      }
      getNotes();
    } catch (err) {
      console.error("Failed to create note:", err);
      setError(err.message); // Set error message
    }
  };

  return (
    <div>
      <div>
        <h2>Notes</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        {notes.map((note) => (
          <Note note={note} ondelete={deleteNotes} key={note.id} />
        ))}
      </div>
      <h2>Create Notes</h2>
      <form onSubmit={createNotes}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="content"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home;
