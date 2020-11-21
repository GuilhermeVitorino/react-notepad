import React, { Component } from 'react';
import FormRegister from './components/FormRegister';
import NoteList from './components/NoteList';
import CategoryList from './components/CategoryList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: [],
      categories: []
    }
  }

  createNote_App(title, text) {
    const newNote = { title, text }
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  addCategory(categoryName) {
    const arrayCategories = [...this.state.categories, categoryName]
    this.setState({ categories: arrayCategories })
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
        <main className="content-main">
          <CategoryList
            categories={this.state.categories}
            addCategory={this.addCategory.bind(this)} />
          <NoteList
            noteList={this.state.notes}
            deleteNote={this.deleteNote.bind(this)} />
        </main>
      </section>
    );
  }
}

export default App;
