// 获取当前url
var pageUrl = new URL(window.location.href);

// 截取url路径部分并分割路径字符串
var pageUrlSplit = pageUrl.pathname.split('/');

// 获取最后一个/后的字符串，即文件名
var pageAndParament = pageUrlSplit[pageUrlSplit.length - 1];

// 获取navbutton node list
var navBtn = document.querySelectorAll("li.nav-item a");

for (var i = 0; i < navBtn.length; i++) {

	// 获取所有button的链接
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
};



// 获取当前event文件夹名，即solution类型
var currentEventName = pageUrlSplit[pageUrlSplit.length - 2];

// 修改页面tab标签名
document.getElementsByTagName("title")[0].innerText = currentEventName;


