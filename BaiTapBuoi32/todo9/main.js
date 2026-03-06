const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("taskList")

const search = document.getElementById("searchInput")
const filter = document.getElementById("filterDone")

// thêm công việc
addBtn.onclick = function(){
		
		const text = input.value
		if(text === "") return
		
		const li = document.createElement("li")
		
		li.innerHTML = `
        <span>${text}</span>
        <button class="done">Done</button>
        <button class="delete">Delete</button>
    `
		
		list.appendChild(li)
		
		input.value = ""
}


// click trong list
list.onclick = function(e){
		
		// done
		if(e.target.className === "done"){
				if(e.target.style.background === "green"){
						e.target.style.background = "yellow"
				}else{
						e.target.style.background = "green"
				}
		}
		
		// delete
		if(e.target.className === "delete"){
				e.target.parentElement.remove()
		}
		
}


// search
search.oninput = function(){
		
		const keyword = search.value.toLowerCase()
		
		const items = list.getElementsByTagName("li")
		
		for(let i = 0; i < items.length; i++){
				
				const text = items[i].innerText.toLowerCase()
				
				if(text.includes(keyword)){
						items[i].style.display = ""
				}else{
						items[i].style.display = "none"
				}
				
		}
		
}


// filter done
filter.onchange = function(){
		
		const items = list.getElementsByTagName("li")
		
		for(let i = 0; i < items.length; i++){
				
				const btn = items[i].querySelector(".done")
				
				if(filter.checked){
						if(btn.style.background === "green"){
								items[i].style.display = ""
						}else{
								items[i].style.display = "none"
						}
				}else{
						items[i].style.display = ""
				}
				
		}
		
}