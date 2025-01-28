const todosList = document.getElementById("todosList");
const txtTask = document.getElementById("txtTask");
const btnAddTask = document.getElementById("btnAddTask");

let todos = [];

btnAddTask.addEventListener("click", ()=>{
    const todosItem = txtTask.value;
    todos.push(todosItem);
    console.log(todos)
    update()
})

// todos.psuh("Task 1")
// todos.push("Task 2")
// todos.push("Task 3")

// console.log(todos)
// console.log(todos.length)
// console.log(todos[0])
// console.log(todos[todos.length-1])

//loop
function update()// good practice, tatawagin lang yung update na button 
// kapag ma click unlike na i copy paste pa ang code sa loob ng button
{
let listItem = ""
for(let i=0;i<todos.length;i++){
    listItem = listItem + "<li>" + todos[i] +"</li>";
}
console.log(listItem)
todosList.innerHTML = listItem;
}