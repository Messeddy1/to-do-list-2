let input = document.getElementById('text');
let addBtn = document.querySelector('.add');
let taskContainer = document.querySelector('.tasks-container')
addBtn.onclick = function(){
  if (input.value !="") {
    let task = document.createElement('div');
    task.classList="task";
    let divName = document.createElement('div');
    divName.classList='task-name';
    divName.appendChild(document.createTextNode(input.value))
    let span = document.createElement('span');
    span.classList ='delete';
    let icon = document.createElement('i');
    icon.classList= " fa-solid fa-trash"
    span.appendChild(icon)
    task.appendChild(divName);
    task.appendChild(span)
    taskContainer.appendChild(task);
  }
  input.value = "";
  input.focus()
}

document.addEventListener('click',function(e){
  if(e.target.classList.contains('delete')){
    e.target.parentNode.remove();
  }
  if(e.target.classList.contains('task')){
    e.target.classList.toggle('lth')
  }
})

