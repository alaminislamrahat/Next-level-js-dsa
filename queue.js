//? Fifo

// array implementation
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift()
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0;
    }


    print(){
        console.log("Start=>",this.items.join("=>"), "End=>")
    }
}


const queu = new Queue();


queu.enqueue(10)
queu.enqueue(20)
queu.enqueue(30)
queu.dequeue()

console.log(queu.peek())

queu.print()