// 获取当前url,根据/分割url
var pageUrlSplit = location.href.split('/');

// 获取最后一个/后的字符串
// var pageNameAddValue = pageUrlSplit[pageUrlSplit.length - 1];
var pageAndParament = pageUrlSplit[pageUrlSplit.length - 1];

// 判断url是否包含参数
var urlSearch = pageAndParament.indexOf('?');

// 获取navbutton node list
var navBtn = document.querySelectorAll("li.nav-item a");

// url无参数
if (urlSearch === -1) {

	for (var i = 0; i < navBtn.length; i++) {

		var urlOfBtn = navBtn[i].getAttribute('href');

		if (pageAndParament === urlOfBtn) {
			navBtn[i].classList.add("active");
		}
		else if (pageAndParament === "setting2.html") {
			navBtn[0].classList.add("active");
		}
		else if (pageAndParament === "setting3.html") {
			navBtn[0].classList.add("active");
		}
		else if (pageAndParament === "setting4.html") {
			navBtn[0].classList.add("active");
		}
		else if (pageAndParament === "setting5.html") {
			navBtn[0].classList.add("active");
		}
		// else{
		// 	navBtn[0].classList.add("active");
		// }
	};
} else {
	var pageAndParamentSplit = pageAndParament.split('?');

	var currentPageUrl = pageAndParamentSplit[pageAndParamentSplit.length - 2];

	for (var i = 0; i < navBtn.length; i++) {

		var urlOfBtn = navBtn[i].getAttribute('href');

		if (currentPageUrl === urlOfBtn) {
			navBtn[i].classList.add("active");
		}
		else if (currentPageUrl === "setting2.html") {
			navBtn[0].classList.add("active");
		}
		else if (currentPageUrl === "setting3.html") {
			navBtn[0].classList.add("active");
		}
		else if (currentPageUrl === "setting4.html") {
			navBtn[0].classList.add("active");
		}
		else if (currentPageUrl === "setting5.html") {
			navBtn[0].classList.add("active");
		}
	};
}


// 获取当前event文件夹名
var currentEventName = pageUrlSplit[pageUrlSplit.length - 2];
// 修改tab标签名
document.getElementsByTagName("title")[0].innerText = currentEventName;


