import React, { Component } from "react"
import "./style.css"

class FormRegister extends Component {

  constructor(props){
   super(props); 
   this.title = '';
   this.text = '';
   this.category = 'No category';
   this.state = {categories:[]}
   this._newCategoriesRef = this._newCategories.bind(this);
  }

  componentDidMount(){
    this.props.categories.subscribe(this._newCategoriesRef);
  }

  componentWillUnmount(){
    this.props.categories.unsubscribe(this._newCategoriesRef);
  }

  _newCategories(categories) {
    this.setState({...this.state, categories})
  }
  
  _handleTitleChange(e){
    e.stopPropagation();
    this.title = e.target.value;
  }
  
  _handleTextChange(e){
    e.stopPropagation();
    this.text = e.target.value;
  }
  
  _handleCategoryChange(e){
    e.stopPropagation();
    this.category = e.target.value;
  }

  _createNote(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.createNote(this.title, this.text, this.category)
  }

  render() {
    return (
      <form className="form-register" onSubmit={this._createNote.bind(this)}>
        <select className="form-register_input"
                 onChange={this._handleCategoryChange.bind(this)}
        >
          <option defaultChecked={true}>No category</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>
          })}
        </select>
        <input 
          type="text" 
          placeholder="Title"
          className="form-register_input"
          onChange={this._handleTitleChange.bind(this)}/>
        <textarea
          rows={15}
          placeholder="Write your note"
          className="form-register_input"
          onChange={this._handleTextChange.bind(this)}></textarea>
        <button className="form-register_input form-register_submit">
          Crate Note
        </button>
      </form>
    )
  }

}

export default FormRegister