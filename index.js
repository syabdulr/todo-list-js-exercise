function newTask(title, description) { // create function
  const task = { // create object task
    title: title, // key value properties
    description: description,
    complete: false,

    logState: function() { // print state
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() { // change key value to true for complete
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

//create tasks
const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", "Sweaty");
const tasks = [task1, task2];
console.log(tasks);

task1.logState();
task1.markCompleted();
task1.logState();

task2.logState();
task2.markCompleted();
task2.logState();

console.log(tasks);
