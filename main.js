$(document).ready(function () {

	// $("#my_audio").get(0).play();
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");

		button.toggleClass("clicked");


		if (filter === "reset") {
			console.log("hello world");
			$(".item").removeClass("active");
			$("button").removeClass("clicked");

			// } else if (filter === "all") {
			// 	console.log("yes");
			// 	$("button").removeClass("clicked");
			// 	$(".item").toggleClass("active");
			// 	button.toggleClass("clicked");
			// $("#everything").addClass("clicked");
		} else {
			// $(".item").removeClass("active");
			// $("button").removeClass("clicked");
			// $("#everything").removeClass("clicked");
			$(".item.active").removeClass("active");
			$("#everything").removeClass("clicked2");
			$(".filter.clicked").each(function (e) {
				// if ($(".item").hasClass("active")) {
				// 	$(".item").toggleClass("active");
				// } else {
				// 	button.addClass("active")
				// }
				var button = $(this);
				var filter = button.data("filter");

				$("." + filter).addClass("active");
			});
		}
		//
		// button.toggleClass("active");
		// $(".item" + "." + filter).toggleClass("active");
		// button.toggleClass("clicked");



		// $(this).toggleClass("active");
	});
	$("#everything").on("click", function (e) {
		e.preventDefault();
		$(".other").removeClass("clicked");
		$(".item").removeClass("active");
		$("#everything").addClass("clicked2");
		$(".item").addClass("active");
	});
});
// $("#criminal-yes").on("click", function (e) {
// 	e.preventDefault();
// 	$("#criminals").addClass("active");
// });

// $(".reset").on("click", function (e) {
// 	e.preventDefault();
// 	$(".item").removeClass("active");
// });
