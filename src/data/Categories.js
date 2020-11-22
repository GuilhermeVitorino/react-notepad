export default class Categories {
  
  constructor(){
    this.categories = []
    this._subscrubs = []
  }

  subscribe(func){
    this._subscrubs.push(func);
  }

  unsubscribe(func){
    this._subscrubs = this._subscrubs.filter(f => f!== func);
  }
  
  notify(){
    this._subscrubs.forEach(func => func(this.categories));
  }
  
  addCategory(categoryName) {
    this.categories.push(categoryName);
    this.notify()
  }
}