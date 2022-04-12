import { LogAndReg } from "./auth";

export function openModal(content) {
	createModal(content);
	const loginForm = document.querySelector("#login-form");
	const registrationForm = document.querySelector("#registration-form");
	if (loginForm) {
		loginForm.addEventListener("submit", LogAndReg.submitLoginForm);
	} else if (registrationForm) {
		registrationForm.addEventListener(
			"submit",
			LogAndReg.submitRegistrationForm
		);
	}
}

function createModal(content) {
	const modal = document.createElement("div");

	modal.classList.add("modal");

	modal.innerHTML = content;
	mui.overlay("on", modal);
}
