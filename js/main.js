const bars_btn = document.querySelector("#bars");
const header = document.querySelector("header");
const ul = document.querySelector("header ul");

bars_btn.addEventListener("click", function () {
	ul.classList.toggle("active");
	header.classList.toggle("header-height");
});
