// Implement a throttler that executes an array of tasks. 
// When the throttler is passed a number, only execute that number of the tasks and passes the other tasks into a queue.

class Throttler {
    constructor(tasks){
        this.taskQ = tasks;
        this.concurrency = 0;
        this.count = 0;
        this.currentQ = []
    }
    runTasks(concurrency){
        this.concurrency = concurrency;
        this.run();
    }
    run(){
        if(this.count < this.concurrency){
            if(this.taskQ.length){
                let task = this.taskQ.shift();
                this.currentQ.push(task.id);
                this.count++;
                this.showCurrentRunningTasks();
                task.runTask(()=> {
                    this.concurrency--;
                });
            }
        }
    }
    showCurrentRunningTasks(){
        console.log('Currently Running', this.currentQ.join(', '));
    }
}



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

let throttler = new Throttler([task1, task2, task3, task4]);
throttler.runTasks(2);
throttler.runTasks(1);
throttler.runTasks(2);
// throttler.runTasks(task4);
