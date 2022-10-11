import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notes, onAddNote, onDelete }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={onAddNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} onDelete={onDelete} />
      <h2>Arsip</h2>
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    </div>
  );
}

export default NoteBody;
