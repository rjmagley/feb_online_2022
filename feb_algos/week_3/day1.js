// nodes and singly linked lists

class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        let new_node = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    display() {

        let output = "";

        let runner = this.head;

        while (runner != null) {
            output += runner.value;
            if (runner.next != null) {
                output += " - ";
            }
            runner = runner.next;
        }

        console.log(output);
    }

    addToTail() {
        // adds node to tail rather than head
    }
}

var new_sll = new SinglyLinkedList();
new_sll.addToHead(8);
new_sll.addToHead(7);
new_sll.addToHead(876);
new_sll.addToHead(3);
new_sll.addToHead(9);
new_sll.addToHead(24);
new_sll.addToHead(2);

new_sll.display();