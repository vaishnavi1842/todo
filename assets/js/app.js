const cl=console.log;

const todoForm=document.getElementById("todoForm");
const todoControl=document.getElementById("todo");
const todoContainer=document.getElementById("todoContainer");

const todoTemplating=(arr)=>{
	
	let skills=`<ul class="list-group">`;
	
	arr.forEach(skill=>{
		skills += `<li class="list-group-item">${skill}</li>`;
	})
	  skills+=`</ul>`;	
	  
	  todoContainer.innerHTML=skills;
	
}



let todoarr = [];

const onTodosubmit=(e)=>{
	e.preventDefault();
	let todo=todoControl.value;
		todoarr.push(todo);
	cl(todoarr);
	todoTemplating(todoarr);
	  e.target.reset()
}


todoForm.addEventListener("submit",onTodosubmit);