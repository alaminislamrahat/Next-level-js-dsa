class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){

         const newNode = new Node(value)
        //? if LinkedList is empty
        if(this.head === null){
           this.head = newNode;
           this.tail = newNode;
        }else{
            //! if linkedList not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value){
         const newNode = new Node(value)
        //? if LinkedList is empty
        if(this.head === null){
           this.head = newNode;
           this.tail = newNode;
        }else{
            //! if linkedList not empty
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    insert(){}

    remove(){}

    print(){

        const arr = [];

        let currentNode = this.head;
        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(arr.join(" --> "), "--> null")
    }
}


const linkedList = new LinkedList();
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)

linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)

linkedList.print()

// const head = new Node(10);
// head.next = new Node(20)

// head.next.next = new Node(30)

// let temp = head;

// while(temp !== null){
//     console.log(temp.value, " ");
//     temp = temp.next;
// }