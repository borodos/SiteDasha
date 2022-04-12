export class LogAndReg {
	static submitLoginForm(e) {
		e.preventDefault();
		const email = e.target.querySelector("#email").value;
		const password = e.target.querySelector("#password").value;
		const apiKey = "AIzaSyDnAaKCM3KjSK5tWyWXGoOGuiLLLOGY138";
		fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}
	`,
			{
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				const object = result;
				console.log(result);
			});
	}
	static submitRegistrationForm(e) {
		e.preventDefault();
		const login = e.target.querySelector("#login").value;
		const email = e.target.querySelector("#email").value;
		const phone = e.target.querySelector("#phone").value;
		const password = e.target.querySelector("#password").value;

		const apiKey = "AIzaSyDnAaKCM3KjSK5tWyWXGoOGuiLLLOGY138";
		fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}
	`,
			{
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				console.log(result);
			});
	}
}
