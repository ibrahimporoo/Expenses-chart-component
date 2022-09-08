// let daysAmounts = Array.from(document.querySelectorAll("li .prgress"));
let allDays = document.querySelectorAll(".progress + p");
let daysAmounts = document.querySelectorAll("li .progress");
let activeAmounts = document.querySelectorAll(".progress .amount");

window.addEventListener("DOMContentLoaded", _ => {
	// ====== To Get the Today's Name =======
	let date = new Date();
	let today = date.getDay();
	// console.log(allDays[today - 1]);
	daysAmounts.forEach(day => {
		day.classList.remove("active");
	})
	daysAmounts[today - 1].classList.add("active");
	// ============ Fetching Data ==============
	fetch("../data.json").then((result) => {
		let Data = result.json();
		return Data;
	}).then(Data => {
		for(let i = 0; i < Data.length; i++) {
			allDays[i].textContent = Data[i].day;
			activeAmounts[i].textContent = "$" + Data[i].amount;
			daysAmounts[i].style.height = `${Data[i].amount + 40}px`;
		}
	});
})


