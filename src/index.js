import React from "react";
import { createRoot } from "react-dom/client";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";
import { getInitialData } from "./utils";

// import style
import "./styles/style.css";

class Container extends React.Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      notes: getInitialData(),
    };

    //binding
    this.onAddNote = this.onAddNote.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDelete(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <>
        <NoteHeader />
        <NoteBody
          notes={this.state.notes}
          onAddNote={this.onAddNote}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<Container />);
