
const currenttasks = [];
const completedtasks = [];
const taskinput = document.querySelector("#taskin");
const newtaskbtn = document.getElementById("newtaskbtn");
const tasklist = document.getElementById("tasks");
const completedlist = document.getElementById("ctasks");
const todocount = document.querySelector("#todotasks");
let count = 0;
displaytasks();
displaycompletedtasks();
document.getElementById("todotasks").textContent = "You have "+ count + " tasks completed. Only "+ currenttasks.length + " remains";
newtaskbtn.addEventListener("click", addtask);


function addtask()
{
    const task = taskinput.value;
    if (task == ""){
        alert("Please enter a task");
    }
    else {
        currenttasks.push({ item: task, status: "todo" });
        taskinput.value = "";
        displaytasks();
        displaycompletedtasks();
        document.getElementById("todotasks").textContent = "You have "+ count + " tasks completed. Only "+ currenttasks.length + " remains";
    }}

function displaytasks(){
tasklist.innerHTML = "";
for (let i = 0; i < currenttasks.length; i++){
    const li = document.createElement("li");
    const text = document.createElement("span");
    const del = document.createElement("span");
    text.textContent = currenttasks[i].item;;
    del.innerHTML = '&#128465;';
    del.className = "trashicon";
    li.appendChild(text);
    li.appendChild(del);
    tasklist.appendChild(li);
    text.addEventListener("click", function(e){    
    const tsk=e.target;
    complete(tsk, i)})
    del.addEventListener("click", function(e){
        delfunc("current", i);
    } )
}}

function complete(tsk, i){
        if (currenttasks[i].status="todo"){
            currenttasks[i].status = "completed";
            count++;
            let cmpttsk = currenttasks.splice(i, 1)[0];
            completedtasks.push(cmpttsk);
            document.getElementById("todotasks").textContent = "You have "+ count + " tasks completed. Only "+ currenttasks.length + " remains";
            completedlist.append();
            displaycompletedtasks();
            displaytasks();
            
        }}          
    
function displaycompletedtasks(){
    completedlist.innerHTML = ""
    for (let i = 0; i < completedtasks.length; i++){
        const li = document.createElement("li");
        const text = document.createElement("span");
        const del = document.createElement("span");
        text.textContent = completedtasks[i].item;
        del.innerHTML = '&#128465;';
        del.className = "trashicon";
        console.log(del);
        li.appendChild(text);
        li.appendChild(del);
        completedlist.appendChild(li);
        text.addEventListener("click", function(e){    
        redo(i)})
        del.addEventListener("click", function(e){
            delfunc("complete", i);
    } )
        }}

function redo(i){
    if (completedtasks[i].status==="completed"){
            completedtasks[i].status = "todo";
            count--;
            let cmpttsk = completedtasks.splice(i, 1)[0];
            currenttasks.push(cmpttsk);

            document.getElementById("todotasks").textContent = "You have "+ count + " tasks completed. Only "+ currenttasks.length + " remains";
            displaytasks();
            displaycompletedtasks();}}
   

function delfunc(listid, i){
if (listid === "current"){
    currenttasks.splice(i, 1)[0];
    document.getElementById("todotasks").textContent = "You have "+ count + " tasks completed. Only "+ currenttasks.length + " remains";
    displaycompletedtasks();
    displaytasks();
}
else {
    completedtasks.splice(i, 1) [0];
    document.getElementById("todotasks").textContent = "You have "+ count + " tasks completed. Only "+ currenttasks.length + " remains";
    displaycompletedtasks();
    displaytasks();
}
}
   


