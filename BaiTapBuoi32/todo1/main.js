
const  button = document.getElementById("addBtn")
const container = document.getElementById("container")



button.addEventListener("click",function (){
		const p=document.createElement('p')
		p.textContent="Hello DOM"
		container.appendChild(p)
})













