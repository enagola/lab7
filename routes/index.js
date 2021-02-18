var projects = require('../projects.json');

/*
 * GET home page.
 */
function initializePage() {
	$('.likeBtn').click(clickLikeBtn);
}

function clickLikeBtn(e) {
	e.preventDefault();
	ga('create', 'UA-164218871-1', 'auto');
	ga('send', 'event', 'like', 'click');
}

exports.view = function(request, response){
	projects['viewAlt'] = false;
  	response.render('index', projects);
};

exports.viewAlt = function(request, response){
	projects['viewAlt'] = true;
	response.render('index', projects);
};