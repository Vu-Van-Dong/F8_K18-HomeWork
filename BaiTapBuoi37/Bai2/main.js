// lấy count từ localStorage
let count = localStorage.getItem("visitCount");

// nếu chưa có → = 0
count = count ? parseInt(count) : 0;

// tăng lên
count++;

// lưu lại
localStorage.setItem("visitCount", count);

// hiển thị
counter.textContent = `Bạn đã truy cập trang này ${count} lần.`;

// reset
resetBtn.onclick = () => {
		localStorage.setItem("visitCount", 0);
		location.reload();
};