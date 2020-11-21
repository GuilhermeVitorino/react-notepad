import React, { Component, useState } from "react"
import CardNote from "../CardNote/CardNote"
import "./style.css"

class NoteList extends Component {

  render() {
    return (
      <ul className="note-list">
        {this.props.noteList.map((note, index) => {
          return (
            <li className="note-list_item" key={index}>
              <CardNote
                note={note}
                deleteNote={this.props.deleteNote}
                index={index}
                category={note.category} />
            </li>
          );
        })}

      </ul>
    )
  }
}

export default NoteList;