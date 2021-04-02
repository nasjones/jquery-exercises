$("#movieForm").submit((e) => {
	e.preventDefault();
	const MOVIE_TITLE = $("#movieTitle").val();
	const MOVIE_RATING = $("#movieRating").val();
	const PARAGRAPH = $("<p>").text(`${MOVIE_TITLE} : ${MOVIE_RATING}`);

	const DELETE_BUTTON = $("<button>")
		.text("Delete")
		.addClass("deleteButton")
		.click(function () {
			$(this).parent().remove();
		});
	const NEW_MOVIE = $("<div>").append(PARAGRAPH, DELETE_BUTTON);
	$("body").append(NEW_MOVIE);
});
