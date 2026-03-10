function startCountdown(seconds) {
		
		let count = seconds
		
		const intervalId = setInterval(function () {
				
				console.log(count)
				
				count--
				
				if (count === 0) {
						console.log("Hết giờ!")
						clearInterval(intervalId)
				}
				
		}, 1000)
		
}


const startBtn = document.getElementById("startBtn")

startBtn.addEventListener("click", function () {
		
		startCountdown(5)
		
})