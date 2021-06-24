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
    // Remove Task
    taskList.addEventListener('click', removeTask)
    // Clear Task
    clearBtn.addEventListener('click', clearTask);
    // Filter
    filter.addEventListener('keyup', filterTask);
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
        link.innerHTML = '<i class="fa fa-times-circle"></i>';
        // Append link to li
        li.appendChild(link);

         
        // Append li to ul <next to link--> i tag create>
        taskList.appendChild(li);

        // Add into Ls
    }
    e.preventDefault();
}

// Function: removeTask()
function removeTask(e){
    
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure ?')){
            e.target.parentElement.parentElement.remove();
            
            // Remove from ls
        }
    }
    console.log('click event fired')
    e.preventDefault();
}

// Function: ClearTask()
function clearTask(){
    // taskList.innerHTML = '';

    //Faster Way
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //Cleat from LS
}

// Function: FilterTask()
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLocaleLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
}