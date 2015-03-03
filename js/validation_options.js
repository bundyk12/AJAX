//AJAX
var searchUrl = 'http://api.bing.net/qson.aspx?';

function populateQuery() {
	var input = $('#search').val();
	var url = encodeURI(searchUrl + 'query=' + input + "&JsonType=callback&JsonCallback=?");

	$.ajax({
		url: url,
		dataType: 'jsonp',
	}).done(function(response){
		showResults(response.searchOptions);
	});
};

function showResults(searchOptions) {
	var results = $('.results');
	results.empty();
	$(searchOptions).each(function(i){
		results.append(webSearchHTML(searchOptions[i]));
	});
};

function webSearchHTML(searchOption) {
	var searchString = '<div class="search">' +
						'<div class="sub-menu">' +
							'<div class="title">' + '<a href="' + encodeURI('http://www.bing.com/search?q=' + searchOption.Text) + '">' + searchOption.Text + '</a><</div>' +
						'</div>' +
					'</div>';

	var listEl = $(searchString);
	return listEl;
}

var userInput = document.getElementById("search");
userInput.addEventListener("keyup", populateQuery);






