class Queue {

    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }

    enQueue(item) {
        this.queue[this.tail] = item;
        this.tail++;
        console.log(item + " Add in Queue");
        console.log(this.tail + " Tail");

    }

    deQueue() {
        if (this.queue.length < 0) {
            console.log("Queue Empty!!!");
        } else {
            delete this.queue[this.head];
            this.head++;
            console.log("Dequeue Element from Queue");
            console.log(this.head + " Head");
        }
    }

    displayQueue() {
        console.log(this.queue);
    }
}

const obj = new Queue();

/* Apply Enqueue Operation */
obj.enQueue(10);
obj.enQueue(20);
obj.enQueue(30);

console.log("Before Removing");
obj.displayQueue();

/* Apply Dequeue Operation */
obj.deQueue();
obj.deQueue();

console.log("After Removing");

obj.displayQueue();

