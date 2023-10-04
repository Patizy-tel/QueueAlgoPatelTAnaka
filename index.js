class PriorityQueue {
    constructor() {
      this.items = [];
    }

    enqueue(element, priority) {
      let queueElement = { element, priority };
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }

    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }

    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }

    rear() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i].element + " ";
      }
      return str;
    }
  }

 
  let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 3);
priorityQueue.enqueue("B", 1);
priorityQueue.enqueue("C", 2);
console.log(priorityQueue.printQueue()); // "B C A"
console.log(priorityQueue.dequeue()); // { element: "B", priority: 1 }
console.log(priorityQueue.printQueue()); // "C A"