export default class NotesArray {

  constructor(){
    this.notes = [];
    this._subscrubs = [];
  }

  addNote( title, text, category ){
    const newNote = new Note( title, text, category );
    this.notes.push(newNote);
    this.notify()
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify()
  }

  subscribe(func){
    this._subscrubs.push(func);
  }

  unsubscribe(func){
    this._subscrubs = this._subscrubs.filter(f => f!== func);
  }

  notify(){
    this._subscrubs.forEach(func => func(this.notes));
  }
}

class Note {
  constructor(title, text, category){
    this.title = title;
    this.text = text;
    this.category = category;
  }
}