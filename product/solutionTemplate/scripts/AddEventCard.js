// 生成 event 卡片 -------------------------------------------------------------------------------------------------------------------------------------------

// personal

var personalCard = ''
personalCardData.forEach(e => {
	personalCard += `
			<div id="${e.id}" class="eventTypeCard" onclick="window.location.href='${e.location}?eventType=${e.eventType}&cardID=${e.id}'">
				<img class="eventTypeImg" src="${e.bg}" alt="${e.title}">
				<div class="TypeCard-body">
					<h5 class="TypeCard-title">
						${e.title}
					</h5>
					<p class="TypeCard-text">
						${e.description}
					</p>
				</div>
			</div>`
})
//渲染到html
document.getElementById('PersonalCardList').innerHTML = personalCard;


// Small Business

var SmallBusinessCard = ''
SmallBusinessCardData.forEach(e => {
	SmallBusinessCard += `
	<div id="${e.id}" class="eventTypeCard" onclick="window.location.href='${e.location}?eventType=${e.eventType}&cardID=${e.id}'">
		<img class="eventTypeImg" src="${e.bg}" alt="${e.title}">
		<div class="TypeCard-body">
			<h5 class="TypeCard-title">
				${e.title}
			</h5>
			<p class="TypeCard-text">
				${e.description}
			</p>
		</div>
	</div>`
})
document.getElementById('SmallBusinessCardList').innerHTML = SmallBusinessCard;


// Domain

var DomainCard = ''
DomainCardData.forEach(e => {
	DomainCard += `
	<div id="${e.id}" class="eventTypeCard" onclick="window.location.href='${e.location}?eventType=${e.eventType}&cardID=${e.id}'">
		<img class="eventTypeImg" src="${e.bg}" alt="${e.title}">
		<div class="TypeCard-body">
			<h5 class="TypeCard-title">
				${e.title}
			</h5>
			<p class="TypeCard-text">
				${e.description}
			</p>
		</div>
	</div>`
})
document.getElementById('DomainCardList').innerHTML = DomainCard;




// event 卡片列表视图，网格视图切换 -------------------------------------------------------------------------------------------------------------------------------------------


document.getElementById('EventListG').addEventListener('click', gridView);
document.getElementById('EventListL').addEventListener('click', listView);


function listView() {
	document.getElementById('EventTypeListStyle').href = '../../../../style/EventTypeListStyle_list.css';
	document.getElementById("EventListL").classList.add("active");
	document.getElementById("EventListG").classList.remove("active");
};

function gridView() {
	document.getElementById('EventTypeListStyle').href = '../../../../style/EventTypeListStyle_grid.css';
	document.getElementById("EventListG").classList.add("active");
	document.getElementById("EventListL").classList.remove("active");
};




// setting1页面状态设置 -------------------------------------------------------------------------------------------------------------------------------------------

// 获取链接参数

// function GetQueryString(name) {
//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//     var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
//     var context = "";
//     if (r != null)
//         context = decodeURIComponent(r[2]);
//     reg = null;
//     r = null;
//     return context == null || context == "" || context == "undefined" ? "" : context;
// }

// 声明事件类型
// var currentCatygory = GetQueryString("eventType");

// 声明卡片ID
// var currentCard = GetQueryString("cardID");

// 当前tab设置为active
// document.getElementById(currentCatygory + "EventTab").classList.add("active");
// document.getElementById(currentCatygory + "EventTab").setAttribute("aria-selected", "ture");

// 显示tab内容区
// document.getElementById(currentCatygory + "EventList").classList.add("show", "active");

// 将当前卡片设置为active
// document.getElementById(currentCard).classList.add("active");

// document.getElementById(currentCard).scrollIntoView();




// function getQuerySrting(name) {
//     var search = location.search.substring(1).split('&');
//     var value = false;
//     for (var i = 0;i < search.length;i++) {
//         var keyValue = search[i].split('=');
//         if (keyValue[0] == name) {
//             value = keyValue[1];
//         }
//     }
// 	alert(value);
//     return value;

// }




var pageUrlSplit = location.href.split('/');

var currentCatygory = pageUrlSplit[pageUrlSplit.length - 4];

var currentEventType = pageUrlSplit[pageUrlSplit.length - 2];

// switch (currentCatygory) {
// 	case Domain:
// 		document.getElementById(currentCatygory).
// }
// 当前tab设置为active
document.getElementById(currentCatygory + "EventTab").classList.add("active");
document.getElementById(currentCatygory + "EventTab").setAttribute("aria-selected", "ture");

// 显示tab内容区
document.getElementById(currentCatygory + "EventList").classList.add("show", "active");

// 将当前卡片设置为active
if (currentCatygory === "Personal") {
	document.getElementById("P_" + currentEventType).classList.add("active");
	document.getElementById("P_" + currentEventType).scrollIntoView({ block: "center" });
}
else if (currentCatygory === "SmallBusiness") {
	document.getElementById("SB_" + currentEventType).classList.add("active");
	document.getElementById("SB_" + currentEventType).scrollIntoView({ block: "center" });
}
else if (currentCatygory === "Domain") {
	document.getElementById("D_" + currentEventType).classList.add("active");
	document.getElementById("D_" + currentEventType).scrollIntoView({ block: "center" });
}




