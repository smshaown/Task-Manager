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
        // Create li Element
        const li = document.createElement('li')
        // Add Class
        li.className = "collection-item";
        // Create Text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));


        // Create Link Element
        const link = document.createElement('a');
        // Add Class
        link.className = 'delete-item secondary-content';
        // Add Icon HTML
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append link to li
        li.appendChild(link);

         
        // Append li to ul <next to link--> i tag create>
        taskList.appendChild(li);
    }
    e.preventDefault();
}