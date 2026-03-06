

const list = document.getElementById("list")
const items = document.querySelectorAll("#list li")

items.forEach(function(li){
		
		li.addEventListener("click", function(){
				
				//delete all
				items.forEach(function(item){
						item.classList.remove("selected")
				})
				
				//
				li.classList.add("selected")
				
		})
		
})