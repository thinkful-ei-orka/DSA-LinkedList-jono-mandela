// import LinkedList from './linked-list';
const LinkedList = require('./linked-list');


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

    // console.log(SLL);
    // display(SLL)
    // console.log('list size: ', size(SLL))
    // console.log('is list empty?' ,isEmpty(SLL))
    // console.log('befor husker:', findPrevious(SLL, 'Husker'))
    // console.log('last item:', findLast(SLL))

    // WhatDoesThisProgramDo(SLL)
    // display(SLL)
    console.log('reverse', iterativeReverseLinkedList(SLL))
}

let display = (list) => {
    let currentNode = list.head;
    while (currentNode !== null) {
        console.log(currentNode);
        currentNode = currentNode.next
    }
};

let size = (list) => {
    let count = 0;
    let currentNode = list.head;
    while (currentNode !== null) {
        count += 1
        currentNode = currentNode.next
    }
    return count
};

let isEmpty = (list) => {
    
    if (list.head === null) return true
    else return false
    
};

let findPrevious = (list, item) => {

    if (isEmpty(list)) {
        return ('List is empty')
    }

    if (list.head.value === item) {
        return (`No value before ${item}`)
    }

    let currentNode = list.head
    let prevNode = null
    while (currentNode.value !== item) {
        prevNode = currentNode
        currentNode = currentNode.next
    }
    return prevNode.value
};

let findLast = (list) => {
    if (isEmpty(list)) {
        return ('List is empty')
    }

    if (list.head.next === null) {
        return list.head
    }

    let currentNode = list.head
    while (currentNode.next !== null) {
        currentNode = currentNode.next
    }

    return currentNode.value
};

// this program finds copies of the same value and removes all but the first instance
// time complexity: O(n^2)
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

function recursiveReverseLinkedList(lst) {
    currentNode = lst.head
    
    // 1, 3, 5, 7, 9

    // same value, pointer next

    function reversePointer(node) {
    // base case
        if (node.next.next === null) {
            node.next.next = node.next
            node.next = null
            return node
        }
    // recursive case
        return node = reversePointer(node)
    }

    lst.head = reversePointer(currentNode) //9 with pointer to 7 (i.e. where )
    } 

function iterativeReverseLinkedList(list) {
    let previousNode = null;
    let currentNode = list.head;
    let nextNode= null;
    
    while (currentNode !== null) {
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode
    }

    list.head = previousNode;
    return list;
}

function thirdFromEnd(list) {
    let current = list.head;
    while (current.next.next.next !== null) {
        current = current.next
    }
    return current
}

main();

