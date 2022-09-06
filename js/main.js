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
	// ============ My Request ==============
	let myRequest = new XMLHttpRequest();
	myRequest.open("GET", "../data.json");
	myRequest.send();
	myRequest.onreadystatechange = function() {
		if(myRequest.readyState == 4 && myRequest.status == 200) {
			let dataJson = JSON.parse(myRequest.responseText);
			for(let i = 0; i < dataJson.length; i++) {
				allDays[i].textContent = dataJson[i].day;
				activeAmounts[i].textContent = "$" + dataJson[i].amount;
				daysAmounts[i].style.height = `${dataJson[i].amount + 40}px`;
			}
		}
	}
})


