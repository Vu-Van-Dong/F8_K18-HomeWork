

const input = document.getElementById("taskInput")
const button = document.getElementById("addBtn")
const list = document.getElementById("list")

button.addEventListener("click", function () {
		
		const value = input.value.trim()
		if(value === "") return
		
		const li = document.createElement("li")
		
		const span = document.createElement("span")
		span.textContent = value
		
		const deleteBtn = document.createElement("button")
		deleteBtn.textContent = "Delete"
		
		li.appendChild(span)
		li.appendChild(deleteBtn)
		
		list.appendChild(li)
		
		input.value = ""
})

list.addEventListener("click", function (event){
		
		// toggle completed
		if(event.target.tagName === "SPAN"){
				event.target.classList.toggle("completed")
		}
		
		// delete
		if(event.target.tagName === "BUTTON"){
				event.target.parentElement.remove()
		}
		
})
















