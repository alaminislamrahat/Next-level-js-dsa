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
    }

    prepend(){}

    insert(){}

    remove(){}

    print(){}
}

// const head = new Node(10);
// head.next = new Node(20)

// head.next.next = new Node(30)

// let temp = head;

// while(temp !== null){
//     console.log(temp.value, " ");
//     temp = temp.next;
// }