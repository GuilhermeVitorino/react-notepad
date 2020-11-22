import React, { Component } from 'react';
import "./style.css";

class CategoryList extends Component {

  constructor(){
    super();
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

  _handleInputEvent(e) {
    if (e.key == "Enter") {
      let categoryValue = e.target.value;
      this.props.addCategory(categoryValue);
    }
  }

  render() {
    return (
      <section className="category-list">
        <ul className="category-list_list">
          {this.state.categories.map((category, index) => {
            return <li className="category-list_item">{category}</li>
          })}
        </ul>
        <input
          type="text"
          className="category-list_input"
          placeholder="Add Category"
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;