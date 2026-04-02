// load lại trang → hiển thị sẵn
window.onload = () => {
		const savedName = localStorage.getItem("username");
		if (savedName) {
				result.textContent = "Tên đã lưu: " + savedName;
		}
};

// lưu
saveBtn.onclick = () => {
		const name = nameInput.value.trim();
		localStorage.setItem("username", name);
};

// đọc
readBtn.onclick = () => {
		const name = localStorage.getItem("username");
		result.textContent = "Tên: " + name;
};