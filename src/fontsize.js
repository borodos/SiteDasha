export function fontsize() {
	let announContainer = document.querySelector(".announ-content-container");
	let announTitleText = document.querySelector(".announ-title");
	let announDescriptionText = document.querySelector(".announ-description");

	let w = announContainer.offsetWidth;
	announTitleText.style.fontSize = w / 24 + "20px";
	announDescriptionText.style.fontSize = w / 30 + "px";
}
window.onload = fontsize;
window.onresize = fontsize;
