// Singleton of global data storage 

export class Storage {
  constructor(){
   if(! Storage.instance){
     this._data = [];
     Storage.instance = this;
   }
   return Storage.instance;
  }

  add(item){
    this._data.push(item);
  }

  get(id){
    return this._data.find(d => d.id === id);
  }
}
