
var currentLocation = location.href.split('/');

var currentPageName = currentLocation[currentLocation.length - 1];

var navBtn = document.querySelectorAll("li.nav-item a");


for (var i = 0; i < navBtn.length; i++) {

	let url = navBtn[i].getAttribute('href');

	if (url === currentPageName) {
		navBtn[i].classList.add("active");
	}
	else if (url === "setting2.html") {
		navBtn[i].classList.add("active");
	}
	else if (url === 'setting3.html') {
		navBtn[i].classList.add("active");
	}
	else if (url === 'setting4.html') {
		navBtn[i].classList.add("active");
	}
	else if (url === 'setting5.html') {
		navBtn[i].classList.add("active");
	}
	else{}
};