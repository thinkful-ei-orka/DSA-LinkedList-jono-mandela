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
    display(SLL)
}

let display = (list) => {
    let currentNode = list.head;
    while (currentNode !== null) {
        console.log(currentNode);
        currentNode = currentNode.next
    }
};

main();
