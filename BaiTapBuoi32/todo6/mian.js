const deleteButtons = document.querySelectorAll(".delete-btn")

deleteButtons.forEach(function (button) {
		button.addEventListener("click", function () {
				
				const li = button.parentElement
				li.remove()
				
		})
})