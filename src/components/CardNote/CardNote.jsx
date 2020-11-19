import React, { Component } from "react"
import "./style.css";

class CardNote extends Component {

  render() {
    return (
      <section className="card-note">
        <header className="card-note_header"> 
          <h3 className="card-note_title">{this.props.note.title}</h3>
        </header>
        <p className="card-note_text">{this.props.note.text}</p>
      </section>
    );
  }
}

export default CardNote;