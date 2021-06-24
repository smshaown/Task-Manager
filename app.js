// Define our ul Veriables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event 
loadEventListeners();

// Custom Function: loadEventListeners();
function loadEventListeners(){
    // Add Task Event
    form.addEventListener('submit', addTask)
}

//function: addTask()
function addTask(e){

    if(taskInput.value === ''){
        alert("add a taks")
    }else{
        
    }
    e.preventDefault();
}