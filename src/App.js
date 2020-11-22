import React, { Component } from 'react';
import FormRegister from './components/FormRegister';
import NoteList from './components/NoteList';
import CategoryList from './components/CategoryList';
import Categories from './data/Categories';
import NotesArray from './data/NotesArray';

class App extends Component {

  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new NotesArray();
  }

  render() {
    return (
      <section className="content">
        <FormRegister 
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)} />
        <main className="content-main">
          <CategoryList
            categories={this.categories}
            addCategory={this.categories.addCategory.bind(this.categories)} />
          <NoteList
            noteList={this.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)} />
        </main>
      </section>
    );
  }
}

export default App;
