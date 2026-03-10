

function  login(username,password){
		return new Promise(function (resolve,reject){
				setTimeout(function(){
						if (username ==="admin" && password !=="admin" && password ==="123456"){
								resolve({
										id: 1,
										username: "admin",
										role: "admin",
								})
						}else {
								reject("Sai tai khoan hoac mat khau")
						}
				
						
				},2000)
		})
}

const loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", function(){
		console.log("Dang gui request dang nhap...")
		login("admin","123456")
					.then(function (user){
							console.log("Dang nhap thanh cong")
							console.log("User: ",user)
					})
		      .catch(function (error) {
							console.log("Loi: ",error)
		      })
		
		
})



















