export class Queue {
    private queueLimit: number;
    private elements: { [key: number]: string } = {};
    private head: number = 0;
    private tail: number = 0;

    constructor(qLimit: number) {
        this.queueLimit = qLimit;
    }

    enqueue(line: string): boolean {
        if (Object.keys(this.elements).length < this.queueLimit) {
            this.elements[this.tail] = line;
            this.tail++;
            return true;
        }
        return false;
    }

    dequeue(): void {
        delete this.elements[this.head];
        this.head++;
    }

    peek(): string {
        return this.elements[this.head];
    }

    getLength(): number {
        return this.tail - this.head;
    }

    isEmpty(): boolean {
        return this.getLength() === 0;
    }

    printElements() {
        return this.elements;
    }
}
