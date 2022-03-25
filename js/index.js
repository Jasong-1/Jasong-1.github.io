$("#solution_nav").on("click", function() {
	$("html,body").animate({
		scrollTop: $("#solution").offset().top
	}, 1000);
});


// Index Dialog

$(".hamburger-menu i").on("click", function() {
	const flag = $(".nav-wrap")[0].style.display;
	console.log(flag);
	flag === "block" ? $(".nav-wrap").hide() : $(".nav-wrap").show();
})

$(".modal-trigger").on("click", function() {
	var url = $(this).attr("url")
	$("#requestDemoDialog").find(".skip-link").attr("href", url)
	$("#requestDemoDialog").modal({
		showClose: false
	});
})
$(".dialog-request-demo").on("click", function() {
	$.modal.close();
})






// get current year

function getcurrentyear() {
	var now = new Date();
	var year = now.getFullYear();
	time = year;
	var currentyear = document.getElementById('currentyear');
	currentyear.innerHTML = time;
}

function letstart() {
	taskld = setInterval(getcurrentyear, 500);
}
window.onload = function() {
	letstart();
}
