import '../styles/note.css';

function Note({ note, ondelete }) {
  const formateDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className='note-container'>
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formateDate}</p>
      <button className='delete-button' onClick={() => ondelete(note.id)}>Delete</button>
    </div>
  );
}

export default Note;
