import React from "react";
import NoteSearch from "./NoteSearch";

class NoteHeader extends React.Component {
  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <NoteSearch />
      </div>
    );
  }
}

export default NoteHeader;
