var view = require("./index.js");
var helper = require("./helper.js");


exports.getTitles = (request, response) => {

	if (request.url.indexOf("address=") == -1) {
		View.addressInUrl(response);
		return;
	}

	view.title(response);

	if (request.query.address instanceof Array) {
		var arrayLength = request.query.address.length;
		for (var counter = 0; counter < arrayLength; counter++) {

			helper.requestTitle(request.query.address[counter], (title) => {
			
				view.description(response, title);
				
			});
		}
	} else {
		helper.requestTitle(request.query.address, function (title) {
			view.description(response, title);
			
		
		});
	}
};

