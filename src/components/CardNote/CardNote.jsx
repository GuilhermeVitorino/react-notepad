import React, { Component } from "react"
import "./style.css";

import {ReactComponent as DeleteSVG} from "../../assets/delete.svg";

class CardNote extends Component {

  delete(){
    const index = this.props.index;
    this.props.deleteNote(index);
  }

  render() {
    return (
      <section className="card-note">
        <header className="card-note_header"> 
          <h3 className="card-note_title">{this.props.note.title}</h3>
          <DeleteSVG onClick={() => this.props.deleteNote(this.props.index)}/>
        </header>
        <p className="card-note_text">{this.props.note.text}</p>
      </section>
    );
  }
}

export default CardNote;