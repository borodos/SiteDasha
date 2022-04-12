import "./reset.css";
import "./main.css";
import "./header.css";
import "./modal_pages.css";
import "./main_content.css";
import { openModal } from "./modalpages";
import { fontsize } from "./fontsize";

fontsize();

const btnRegistration = document.querySelector("#btn-registration");
const btnLogin = document.querySelector("#btn-login");
const BtnRegRestaurant = document.querySelector("#btn-reg-restaurant");

btnLogin.addEventListener("click", () => {
	openModal(getLoginFormHTML());
});
btnRegistration.addEventListener("click", () => {
	openModal(getRegistrationFormHTML());
});

// -- Модальное окно авторизации
function getLoginFormHTML() {
	return `
    <form class="mui-form" id="login-form">
					<h1>Авторизация</h1>
					<div class="mui-textfield mui-textfield--float-label">
						<input type="email" id="email" required />
						<label>Email адрес</label>
					</div>
					<div class="mui-textfield mui-textfield--float-label">
						<input type="password" id="password" required />
						<label>Пароль</label>
					</div>
					<button type="submit" class="mui-btn mui-btn--raised" id="Login">
						Авторизация
					</button>
				</form>
                `;
}

// -- Модальное окно регистрации
function getRegistrationFormHTML() {
	return `
    <form class="mui-form" id="registration-form">
				<h1>Регистрация</h1>
				<div class="mui-textfield mui-textfield--float-label">
					<input type="login" id="login" required />
					<label>Логин</label>
				</div>
				<div class="mui-textfield mui-textfield--float-label">
					<input type="email" id="email" required />
					<label>Email адрес</label>
				</div>
				<div class="mui-textfield mui-textfield--float-label">
					<input type="phone" id="phone"required />
					<label>Номер телефона</label>
				</div>
				<div class="mui-textfield mui-textfield--float-label">
					<input type="password" id="password" required />
					<label>Пароль</label>
				</div>
				<button type="submit" class="mui-btn mui-btn--raised" id="Registration">Регистрация</button>
			</form>
                `;
}

// ----------------------------------------------
