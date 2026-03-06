
const input = document.getElementById("textInput")
const button = document.getElementById("addBtn")
const container = document.getElementById("container")

button.addEventListener("click",function (){
		//  lấy giá trị
		
		const value = input.value
		
		// Kiểm tra rổng
		if (value.trim()===""){
				return
		}
		
		// Tạo p
		const p= document.createElement("p")
		p.textContent = value
		
		// them vao dom
		container.appendChild(p)
		
		
		// claer input
		
		input.value= " "
})











