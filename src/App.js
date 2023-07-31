import { useEffect, useState } from "react";
import { v4 } from "uuid";
import classes from "./App.module.css";
import Note from "./Note";
import AddNote from "./AddNote";


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [openAddNote, setOpenAddNote] = useState(false);

  const showAddNote = () => setOpenAddNote(true);
  const closeAddNote = () => setOpenAddNote(false);

  const addNote = noteData =>
    (setNotes([...notes, { ...noteData, id: v4(), createdAt: new Date().toISOString() }]))

  const removeNote = id => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={classes.app}>
      <div className={classes.notesContainer}>
        {notes?.map(note => (
          <Note
            key={note.title}
            note={note}
            remove={removeNote} />
        ))}
        <button
          className={classes.addBtn}
          onClick={showAddNote}>
          <div className={classes.addBox}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '55px' }}>
              add
            </span>
          </div>
        </button>
        <AddNote
          open={openAddNote}
          onClose={closeAddNote}
          add={addNote} />
      </div>
    </div>
  );
}

export default App;
