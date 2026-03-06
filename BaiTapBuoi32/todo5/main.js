
const items=document.querySelectorAll("#list li")

items.forEach(function (li){
		li.addEventListener("click",function (){
				if (li.style.color==="red"){
						li.style.color="black"
				}else {
						li.style.color="red"
				}
		})
})










