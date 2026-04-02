// ─── Khai báo Zod ─────────────────────────────────────────────
const { z } = window.Zod;


// TODO 1: Định nghĩa registerSchema
const registerSchema = z
.object({
		firstName: z.string().min(2, "Họ phải ≥ 2 ký tự"),
		
		lastName: z.string().min(2, "Tên phải ≥ 2 ký tự"),
		
		email: z.string().email("Email không hợp lệ"),
		
		phone: z
		.string()
		.optional()
		.refine(
				(val) => !val || /^0\d{9}$/.test(val),
				"SĐT phải là 10 số và bắt đầu bằng 0"
		),
		
		role: z.enum(["dev", "design", "pm", "other"], {
				errorMap: () => ({ message: "Vui lòng chọn vai trò" }),
		}),
		
		password: z
		.string()
		.min(8, "Mật khẩu ≥ 8 ký tự")
		.regex(/[A-Za-z]/, "Phải có chữ cái")
		.regex(/[0-9]/, "Phải có số"),
		
		confirmPassword: z.string(),
		
		terms: z.literal(true, {
				errorMap: () => ({ message: "Bạn phải đồng ý điều khoản" }),
		}),
})
.superRefine((data, ctx) => {
		// kiểm tra confirmPassword === password
		if (data.password !== data.confirmPassword) {
				ctx.addIssue({
						path: ["confirmPassword"],
						message: "Mật khẩu không khớp",
				});
		}
});


//  TODO 2: Hàm showError / showSuccess / clearField
function showError(fieldId, errorMsgId, message) {
		const field = document.getElementById(fieldId);
		const errorEl = document.getElementById(errorMsgId);
		
		field.classList.add("is-error");
		field.classList.remove("is-success");
		
		errorEl.textContent = message;
		errorEl.classList.add("show");
}

function showSuccess(fieldId, errorMsgId) {
		const field = document.getElementById(fieldId);
		const errorEl = document.getElementById(errorMsgId);
		
		field.classList.remove("is-error");
		field.classList.add("is-success");
		
		errorEl.textContent = "";
		errorEl.classList.remove("show");
}

function clearField(fieldId, errorMsgId) {
		const field = document.getElementById(fieldId);
		const errorEl = document.getElementById(errorMsgId);
		
		field.classList.remove("is-error", "is-success");
		errorEl.textContent = "";
		errorEl.classList.remove("show");
}


//  Helper: lấy data từ form
function getFormData() {
		return {
				firstName: document.getElementById("firstName").value.trim(),
				lastName: document.getElementById("lastName").value.trim(),
				email: document.getElementById("email").value.trim(),
				phone: document.getElementById("phone").value.trim(),
				role: document.getElementById("role").value,
				password: document.getElementById("password").value,
				confirmPassword: document.getElementById("confirmPassword").value,
				terms: document.getElementById("terms").checked,
		};
}


//  TODO 3: Xử lý submit
document
.getElementById("registerForm")
.addEventListener("submit", (e) => {
		e.preventDefault();
		
		const data = getFormData();
		const result = registerSchema.safeParse(data);
		
		// clear lỗi cũ
		[
				"firstName",
				"lastName",
				"email",
				"phone",
				"role",
				"password",
				"confirmPassword",
				"terms",
		].forEach((f) => clearField(f, f + "Error"));
		
		// nếu có lỗi
		if (!result.success) {
				const errors = result.error.flatten().fieldErrors;
				
				Object.keys(errors).forEach((key) => {
						if (errors[key]) {
								showError(key, key + "Error", errors[key][0]);
						}
				});
				
				return;
		}
		
		// success → hiện màn thành công
		document.getElementById("registerForm").style.display = "none";
		document.getElementById("successScreen").classList.add("show");
});


//TODO 4: Validation real-time khi blur
[
		"firstName",
		"lastName",
		"email",
		"phone",
		"role",
		"password",
		"confirmPassword",
].forEach((field) => {
		document.getElementById(field).addEventListener("blur", () => {
				const data = getFormData();
				const result = registerSchema.safeParse(data);
				
				if (!result.success) {
						const errors = result.error.flatten().fieldErrors;
						
						if (errors[field]) {
								showError(field, field + "Error", errors[field][0]);
						} else {
								showSuccess(field, field + "Error");
						}
				} else {
						showSuccess(field, field + "Error");
				}
		});
});

// checkbox riêng
document.getElementById("terms").addEventListener("change", () => {
		if (document.getElementById("terms").checked) {
				showSuccess("terms", "termsError");
		}
});


// TODO 5: Toggle password
function togglePassword(inputId, btnId) {
		const input = document.getElementById(inputId);
		const btn = document.getElementById(btnId);
		
		btn.addEventListener("click", () => {
				if (input.type === "password") {
						input.type = "text";
						btn.textContent = "🙈";
				} else {
						input.type = "password";
						btn.textContent = "👁";
				}
		});
}

togglePassword("password", "togglePassword");
togglePassword("confirmPassword", "toggleConfirm");


//TODO 6: Thanh độ mạnh mật khẩu
const passwordInput = document.getElementById("password");
const bars = document.getElementById("strengthBars");
const label = document.getElementById("strengthLabel");

passwordInput.addEventListener("input", () => {
		const val = passwordInput.value;
		
		let score = 0;
		
		if (val.length >= 8) score++;
		if (/[A-Z]/.test(val)) score++;
		if (/[0-9]/.test(val)) score++;
		if (/[^A-Za-z0-9]/.test(val)) score++;
		
		bars.setAttribute("data-level", score);
		
		const text = ["Rất yếu", "Yếu", "Trung bình", "Mạnh", "Rất mạnh"];
		label.textContent = text[score];
});


//  TODO 7: Nút Reset
document.getElementById("resetBtn").addEventListener("click", () => {
		document.getElementById("registerForm").reset();
		
		[
				"firstName",
				"lastName",
				"email",
				"phone",
				"role",
				"password",
				"confirmPassword",
				"terms",
		].forEach((f) => clearField(f, f + "Error"));
		
		document.getElementById("successScreen").classList.remove("show");
		document.getElementById("registerForm").style.display = "block";
		
		// reset strength
		bars.setAttribute("data-level", 0);
		label.textContent = "Độ mạnh mật khẩu";
});