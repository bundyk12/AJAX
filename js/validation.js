//AJAX
var searchUrl = 'http://api.bing.net/qson.aspx?';

function populateQuery() {
	var input = $('#search').val();
	var url = encodeURI(searchUrl + 'query=' + input + "&JsonType=callback&JsonCallback=?");

	$.ajax({
		url: url,
		dataType: 'jsonp',
	}).done(function(response){
		showResults(response.web);
	});
};

function showResults(web) {
	var results = $('.results');
	results.empty();
	$(web).each(function(){
		results.append(webSearchHTML(web.ID));
	});
};

function webSearchHTML(ID) {
	var webString = '<div class="search">' +
					'<div class="sub-menu">' +
						'<div class="title">' + web.Title + '</div>' +
						'<div class="description">Rated: ' + web.Description + '</div>' +
						'<div class="displayUrl">' + '<a href="' + web.Url + '">' + web.DisplayUrl + '</a></div>' +
					'</div>' +
				'</div>';

	var listEl = $(webString);
	return listEl;
}


var userInput = document.getElementById("search");
userInput.addEventListener("keyup", populateQuery);






