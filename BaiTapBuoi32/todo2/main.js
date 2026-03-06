

const button = document.getElementById("addBtn")
const list = document.getElementById("list")

let  count=1
button.addEventListener("click",function(){
		const li=document.createElement("li")
		li.textContent="Item " + count
		list.appendChild(li)
		count++
})















