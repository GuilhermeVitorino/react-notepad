import React, { Component, useState } from "react"
import CardNote from "../CardNote/CardNote"
import "./style.css"

class NoteList extends Component {
  constructor(){
    super();
    this.state = {notes: []};
    this._newNotesRef = this._newNotes.bind(this);
  }

  componentDidMount(){
    this.props.noteList.subscribe(this._newNotesRef);
  }
  
  componentWillUnmount(){
    this.props.noteList.unsubscribe(this._newNotesRef);
  }

  _newNotes(notes){
    this.setState({...this.state, notes});
  }

  render() {
    return (
      <ul className="note-list">
        {this.state.notes.map((note, index) => {
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