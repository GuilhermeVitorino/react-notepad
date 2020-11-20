import React, { Component } from 'react';
import FormRegister from './components/FormRegister/FormRegister';
import NoteList from './components/NoteList/NoteList';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes:[]
    }
  }

  createNote_App(title, text) {
    const newNote = {title,text}
    this.setState({ 
      notes:[...this.state.notes, newNote]
    })
  }

  deleteNote(index) {
    let noteList = this.state.notes
    noteList.splice(index, 1);
    this.setState({ notes: noteList })
  }

  render() {

    return (
      <section className="content">
        <FormRegister createNote={this.createNote_App.bind(this)} />
        <NoteList noteList={this.state.notes} deleteNote={this.deleteNote.bind(this)} />
      </section>
    );
  }
}

export default App;
