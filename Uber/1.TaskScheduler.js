
// https://dev.to/officialbidisha/creating-async-task-runner-with-concurrency-in-javascript-49j9
class Runner {
    constructor(concurrency = 1) {
        // max tasks that can run at a time
        this.concurrency = concurrency;
        // the queue that contains all the tasks
        this.waitQ = [];
        // the number of tasks running at current time
        this.count = 0;
        // the current task ids running to show on screen
        this.currentQ = [];
    }

    push(task) {
        console.log("Pushimg to waitQ", task.id);
        this.waitQ.push(task);
        this.run();
    }

    run() {
        // check if the count is less than concurrency
        console.log("Current Tasks", this.currentQ.join(", "));
        if (this.count < this.concurrency) {
            // check if there are tasks in waitQ to be executed
            if (this.waitQ.length > 0) {
                // 1. take out the task from the waitList
                let task = this.waitQ.shift();
                // update the currentQ to show on screen
                this.currentQ.push(task.id);
                this.count++;
                console.log("Pushed to current Queue", task.id);
                this.showOnScreen();

                let done = function () {
                    let idx = this.currentQ.indexOf(task.id);
                    this.currentQ.splice(idx, 1);
                    console.log("Removed from the current Queue", task.id);
                    this.showOnScreen();
                    this.count--;
                    // check if there are more tasks in the waiting queue
                    // when the current Queue marks a task done
                    // and make space for a new task
                    this.run();
                }.bind(this);
                task.runTask(done);
            }
        }
    }
    showOnScreen() {
        console.log("Cuurently running", this.currentQ.join(", "));
    }
}

let runner = new Runner(3);
let task1 = {
    id: 1,
    runTask: function (done) {
        setTimeout(function () {
            console.log("Running Task 1");
            done();
        }, 3000);
    }
};

let task2 = {
    id: 2,
    runTask: function (done) {
        setTimeout(function () {
            console.log("Running Task 2");
            done();
        }, 5000);
    }
};

let task3 = {
    id: 3,
    runTask: function (done) {
        setTimeout(function () {
            console.log(" Running Task 3");
            done();
        }, 4000);
    }
};

let task4 = {
    id: 4,
    runTask: function (done) {
        setTimeout(function () {
            console.log("Running Task 4");
            done();
        }, 9000);
    }
};

runner.push(task1);
runner.push(task2);
runner.push(task3);
runner.push(task4);


// Pushing to waitQ
// 1
// Current Tasks ""
// Pushed to current Queue
// 1
// Cuurently running 1
// Pushing to waitQ
// 2
// Current Tasks 1
// Pushed to current Queue
// 2
// Cuurently running 1, 2
// Pushing to waitQ
// 3
// Current Tasks 1, 2
// Pushed to current Queue
// 3
// Cuurently running 1, 2, 3
// Pushing to waitQ
// 4
// Current Tasks 1, 2, 3
// Running Task 1
// Removed from the current Queue
// 1
// Cuurently running 2, 3
// Current Tasks 2, 3
// Pushed to current Queue
// 4
// Cuurently running 2, 3, 4
//  Running Task 3
// Removed from the current Queue
// 3
// Cuurently running 2, 4
// Current Tasks 2, 4
// Running Task 2
// Removed from the current Queue
// 2
// Cuurently running 4
// Current Tasks 4
// Running Task 4
// Removed from the current Queue
// 4
// Cuurently running ""
// Current Tasks ""
// ​