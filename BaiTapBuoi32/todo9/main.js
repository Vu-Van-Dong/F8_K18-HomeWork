


const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("taskList")

const searchInput = document.getElementById("searchInput")
const filterDone = document.getElementById("filterDone")


// ADD TASK
addBtn.addEventListener("click", function(){
		
		const value = input.value.trim()
		if(value === "") return
		
		const li = document.createElement("li")
		
		const text = document.createElement("span")
		text.textContent = value
		
		const doneBtn = document.createElement("button")
		doneBtn.textContent = "Done"
		doneBtn.classList.add("done-btn")
		
		const deleteBtn = document.createElement("button")
		deleteBtn.textContent = "Delete"
		deleteBtn.classList.add("delete-btn")
		
		li.appendChild(text)
		li.appendChild(doneBtn)
		li.appendChild(deleteBtn)
		
		list.appendChild(li)
		
		input.value = ""
})


// EVENT DELEGATION
list.addEventListener("click", function(e){
		
		// DONE BUTTON
		if(e.target.textContent === "Done"){
				e.target.classList.toggle("done")
		}
		
		// DELETE BUTTON
		if(e.target.textContent === "Delete"){
				e.target.parentElement.remove()
		}
		
})


// SEARCH
searchInput.addEventListener("input", function(){
		
		const keyword = searchInput.value.toLowerCase()
		
		const items = list.querySelectorAll("li")
		
		items.forEach(function(li){
				
				const text = li.querySelector("span").textContent.toLowerCase()
				
				if(text.includes(keyword)){
						li.style.display = ""
				}else{
						li.style.display = "none"
				}
				
		})
		
})


// FILTER DONE
filterDone.addEventListener("change", function(){
		
		const items = list.querySelectorAll("li")
		
		items.forEach(function(li){
				
				const doneBtn = li.querySelector(".done-btn")
				
				if(filterDone.checked){
						
						if(doneBtn.classList.contains("done")){
								li.style.display = ""
						}else{
								li.style.display = "none"
						}
						
				}else{
						li.style.display = ""
				}
				
		})
		
})