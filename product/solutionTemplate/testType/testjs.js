/***
         * 使用JS模板引擎渲染页面!!
         *
         * */
//TODO step1: 获取模板
var tpl = document.getElementById('tpl').innerHTML;
console.log(tpl);
console.log(data)
//TODO step2: 解析数据
var temp = '';//缓存字符串
for (var i = 0; i < data.data.length; i++) {
    var obj = data.data[i];
    //console.log(obj);
    temp += tpl.replace('@title', obj.title)
        .replace('@abstract', obj.abstract)
        .replace('@source', obj.source)
        .replace('@chinese_tag', obj.chinese_tag)
        .replace('@group_id', obj.group_id + '123');
}
document.getElementById('cont').innerHTML = temp;



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

		
	};
} else {
	var pageAndParamentSplit = pageAndParament.split('?');

	var currentPageUrl = pageAndParamentSplit[pageAndParamentSplit.length - 2];

	
}


// 获取当前event文件夹名
var currentEventName = pageUrlSplit[pageUrlSplit.length - 2];
// 修改tab标签名
document.getElementsByTagName("title")[0].innerText = currentEventName;