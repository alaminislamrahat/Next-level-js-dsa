class Stack {
  constructor(){
    this.items = [];
  }

  push(value){
    this.items.push(value)
  }

  pop(){
    if(this.items.length === 0){
        return undefined;
    }
    return this.items.pop()
  }

  peek(){

  }
}