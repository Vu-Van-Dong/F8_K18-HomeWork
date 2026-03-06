
const input = document.getElementById("taskInput")
const button = document.getElementById("addBtn")
const list = document.getElementById("taskList")

button.addEventListener("click",function (){
		const task=input.value.trim()
		
		if (task===""){
				return
		}
		const li=document.createElement("li")
		li.textContent=task
		list.appendChild(li)
		
		input.value=""
})















