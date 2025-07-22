// Lấy các element cần thiết từ DOM
const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const closeButtons = document.querySelectorAll(".js-modal-close");
const switchToLoginBtn = document.querySelector(".js-switch-to-login");
const switchToRegisterBtn = document.querySelector(".js-switch-to-register");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

function showModal() {
  modal.classList.add("open");
}

function hideModal() {
  modal.classList.remove("open");
}

function showRegisterForm() {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  showModal();
}

function showLoginForm() {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  showModal();
}

registerBtn.addEventListener("click", showRegisterForm);
loginBtn.addEventListener("click", showLoginForm);

switchToLoginBtn.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});

switchToRegisterBtn.addEventListener("click", () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

modalOverlay.addEventListener("click", hideModal);

closeButtons.forEach((button) => {
  button.addEventListener("click", hideModal);
});

// Xử lý sự kiện click cho giỏ hàng
