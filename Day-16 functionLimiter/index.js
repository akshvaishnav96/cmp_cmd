// Problem Statement
// Design and implement an TaskRunner utility that processes asynchronous tasks with a maximum concurrency limit. The utility should ensure that at most a defined number of tasks (concurrency) are running at any given time. If more tasks are pushed into the queue when the limit is reached, they should wait until at least one running task is completed before execution.

// The push method is used to add tasks (asynchronous functions) to the executor. If the current number of running tasks is below the concurrency limit, the task should be executed immediately. If the number of running tasks is equal to or exceeds the concurrency limit, the task should wait until a running task finishes before starting.

// Arguments
//  - concurrency (number): The maximum number of tasks that can run concurrently.
//  - task (function): An asynchronous function to be executed. It is passed to the push method.

// Returns
//  - The push method does not return a value. It simply manages task execution by ensuring that tasks run according to the concurrency limit.


// EXAMPLE: (HOW IT WOULD BE USED)


// // Simulated async tasks



class TaskRunner {
    constructor(concurrency) {

        this.taskQueue = [];
        this.concurrency = concurrency,
            this.pendingQueue = [];

    }

    push(task) {


        if (this.taskQueue.length >= 3) {
            this.pendingQueue.push(task)
        } else {
            this.taskQueue.push(task)
            task()
        }

    }




    checkQueue(func) {

    }

    updatequeue() {

    }
}



const t1 = async () => {
    console.log('t1 started');
    await delay(2000);
    console.log('t1 finished');
};







const t2 = async () => {
    console.log('t2 started');
    await delay(1000);
    console.log('t2 finished');
};
const t3 = async () => {
    console.log('t3 started');
    await delay(1500);
    console.log('t3 finished');
};
const t4 = async () => {
    console.log('t4 started');
    await delay(1000);
    console.log('t4 finished');
};
const t5 = async () => {
    console.log('t5 started');
    await delay(500);
    console.log('t5 finished');
};

// // Add tasks to the executor
const ex = new TaskRunner(3);
ex.push(t1);  // Starts immediately
ex.push(t2);  // Starts immediately
ex.push(t3);  // Starts immediately
ex.push(t4);  // Waits until at least one task finishes
ex.push(t5);  // Waits until another task finishes



