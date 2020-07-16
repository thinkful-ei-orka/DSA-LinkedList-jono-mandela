class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, value) {
        let newNode = new _Node(item, null);
        if (this.head.value === value || this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.next.value !== value) {
                tempNode = tempNode.next
            }
            newNode.next = tempNode.next;
            tempNode.next = newNode;
        }
    }

    insertAfter(item, value) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.value !== value) {
                tempNode = tempNode.next
            }
            let newNode = new _Node(item, tempNode.next);
            tempNode.next = newNode;
        }
    }

    insertAt(item, position) {
        if (this.head === null || position === 1) {
            this.insertFirst(item)
        }
        else {
            let currentNode = this.head
            for (let i = 1; i < position; i++) {
                if(currentNode.next === null) {
                    this.insertLast(item)
                }
                currentNode = currentNode.next
            }
            this.insertBefore(item, currentNode.value)
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        console.log('ln110', currNode);
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            // console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

let display = (list) => {
    let currentNode = list.head;
    while (currentNode !== null) {
        // console.log(currentNode);
        currentNode = currentNode.next
    }
};

let size = (list) => {
    return
};

let isEmpty = (list) => {
    return
};

let findPrevious = (list) => {
    return
};

let findLast = (list) => {
    return
};

function main() {
    let SLL = new LinkedList()
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')

    SLL.insertLast('Tauhida')

    SLL.remove('squirrel')

    SLL.insertBefore('Athena', 'Boomer')

    SLL.insertAfter('Hotdog', 'Helo')

    SLL.insertAt('Kat', 3)

    SLL.remove('Tauhida')

    console.log(SLL);
    return SLL;
}

// const testList = main();

// display(testList);

module.exports = LinkedList