function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false, 

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function(){
      this.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW


const task1 = newTask("Clean Cat Litter", "take all the 💩 out of the liltter box");
const task2 = newTask("Do Laundry", "😨")
const task3 = newTask("Clean the kitchen", "just put it all in the dishwasher!")
const tasks = [task1, task2, task3];

task1.logState();
task1.markCompleted();
task1.logState();

