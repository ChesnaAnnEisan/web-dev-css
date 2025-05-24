








/**
 *Description: This function simply console logs a task
 * @param task task a unit of work
 */

function logTask(task):void{
    console.log('Task: ${task.title}, Complete: ${task.completed};
 }

//Array of task objects to represent application date
const tasks =[
 {id: 1,title:"Learn javascript", completed:true},
    {id: 2,title:"Build Task Application", completed:false},
    {id: 3,title:"Review DOM", completed:false},
 ];
//Use for.. of for readable iteration
for (let task: {} of tasks) {
    logTask(task);
}

/**
 * JSON and JavaScript Objects
 */

//JSON stringify converts objects to JSON strings for storage and transfer
    const tasksJSON:string[] = JSON.stringify(tasks);





//JSON stringify converts objects to JSON strings for storage and transfer
const tasksJSON: string = JSON.stringify(tasks);
console.log(`[DEBUG] Tasks as JSON string ${tasksJSON}`);

//JSON.parse converts strings back to objects
const parseTasks = JSON.parse(tasksJSON);
console.log(`[DEBUG] Tasks JSON string ${tasksJSON}]`);

const taskList:HTMLElement= document.getElementById('task list');

function toggletask(taskId){

    const task:{} = tasks.find(t:{} => t.id ===taskId);

}

function renderTask(task):void {

    const li:HTMLElement = document.createElement(tagName:"li");
    li.className="task-item";

    const icon:HTMLElement = document.createElement("i");
    //ternary operator -if else equivalent
    icon.className = (task.completed)? "fa fa-check-circle task-icon": "fas fa-circle task-icon"

    //Add task title
    const title:HTMLSpanElement = document.createElement("span");
    title.textContent=task.title;

    //append icon and title to list item
    li.appendChild(title);
    li.appendChild(icon);

    //add list item to the task list
    taskList.appendChild(li);
}


tasks.forEach(renderTask);

//select the form from the dom
const taskForm : HTMLElement = document.getElementById('task-form');

taskForm.addEventListener('submit', (event)=>{ })

