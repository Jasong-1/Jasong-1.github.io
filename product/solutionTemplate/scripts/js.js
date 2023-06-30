// 获取当前url,根据/分割url
var currentLocation = location.href.split('/');

// 获取最后一个/后的字符串
// var pageNameAddValue = currentLocation[currentLocation.length - 1];
var currentPageName = currentLocation[currentLocation.length - 1];

// 分割文件名和参数
// var pageNameAddValueSplit =  pageNameAddValue.split('?');

// 获取文件名
// var currentPageName = pageNameAddValueSplit[pageNameAddValueSplit.length - 2];

// 获取navbutton node list
var navBtn = document.querySelectorAll("li.nav-item a");


for (var i = 0; i < navBtn.length; i++) {
	
	var url = navBtn[i].getAttribute('href');

	if (currentPageName === url) {
		navBtn[i].classList.add("active");
	}
	else if (currentPageName === "setting2.html") {
		navBtn[0].classList.add("active");
	}
	else if (currentPageName === "setting3.html") {
		navBtn[0].classList.add("active");
	}
	else if (currentPageName === "setting4.html") {
		navBtn[0].classList.add("active");
	}
	else if (currentPageName === "setting5.html") {
		navBtn[0].classList.add("active");
	}
	// else{
	// 	navBtn[0].classList.add("active");
	// }
};


// 获取当前event文件夹名
var currentEventName = currentLocation[currentLocation.length - 2];
// 修改tab标签名
document.getElementsByTagName("title")[0].innerText = currentEventName;


