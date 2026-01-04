class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {

        const newNode = new Node(value)
        //? if LinkedList is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //! if linkedList not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value)
        //? if LinkedList is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //! if linkedList not empty
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.log("index out of bound");
            return undefined;
        }

        //if the insert is in the fist of the linked list
        if (index === 0) {
            return this.prepend(value)
        }

        // if the insert is in the end of the linkedlist 
        if (index === this.length) {
            return this.append(value)
        }

        // if the insert is in the middle 

        //? find the leading node
        const leadingNode = this._traverseToIndex(index - 1)
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);
        leadingNode.next = newNode;
        newNode.next = holdingNode
        this.length++;


    }

    remove(index) {


        if(index === 0){

            const removedItem = this.head.value;
            this.head = this.head.next;

            if(this.length === 0){
                this.tail = null;
            }

            this.length--
            return removedItem;
        }


        const leadingNode = this._traverseToIndex(index - 1);
        const nodeToRemove = leadingNode.next;
        leadingNode.next = nodeToRemove.next;

        if(leadingNode.next === null){
            this.tail = leadingNode;
        }

        return nodeToRemove.value;
     }

    //* private helper method
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;

        while (count !== index) {
            currentNode = currentNode.next;
            count++
        }

        return currentNode;
    }

    print() {

        const arr = [];

        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(arr.join(" --> "), "--> null")
    }
}


const linkedList = new LinkedList();


linkedList.append("D")

linkedList.print()




linkedList.remove(0)

linkedList.print()

// const head = new Node(10);
// head.next = new Node(20)

// head.next.next = new Node(30)

// let temp = head;

// while(temp !== null){
//     console.log(temp.value, " ");
//     temp = temp.next;
// }