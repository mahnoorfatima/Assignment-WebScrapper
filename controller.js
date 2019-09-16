var view = require("./index.js");
var helper = require("./helper.js");
var async = require("async");
var rsvp = require("rsvp");
var rx = require("rx");
////////////// Task 1- node.js callbacks with express ////////////////


exports.getTitles = (request, response) => {

	if (request.url.indexOf("address=") == -1) {
		view.title(response);
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



/////////////////// Task 2 - Async js /////////

// exports.getTitles = function (request, response) {
// 	var stack = [];
// 	if (request.url.indexOf("address=") == -1) {
// 		view.title(response);
// 		return;
// 	}

// 	view.title(response);

// 	if (request.query.address instanceof Array) {
// 		var arrayLength = request.query.address.length;
// 		for (var counter = 0; counter < arrayLength; counter++) {
// 			helper.getCompleteUrl(request.query.address[counter], function (x2) {
// 				var getCompleteTitle = function (callback) {
// 					helper.requestTitle(x2, function (title) {
// 						callback(null, title);
// 					});
// 				}
			
// 				stack.push(getCompleteTitle);
// 			});
// 		}
// 	} else {
// 		var getCompleteTitle = function (callback) {
// 			helper.requestTitle(request.query.address, function (title) {
// 				callback(null, title);
// 			});
// 		}
// 		stack.push(getCompleteTitle);
// 	}
// 	async.parallel(stack, function (err, records) {
// 		if (err) {
// 			console.log("error" + err);
// 		}
// 		for (var i = 0; i < records.length; i++) {
// 			view.description(response, records[i]);
// 		}


// 	});
// };

/////////////////// Task 3 - Promises using RSVP /////////

// exports.getTitles = function (request, response) {
// 		if (request.url.indexOf("address=") == -1) {
// 		view.title(response);
// 		return;
// 	}
// 	view.title(response);
// 	if (request.query.address instanceof Array) {
// 		var promises = [];
// 		var arrayLength = request.query.address.length;
// 		for (var counter = 0; counter < arrayLength; counter++) {
// 			promises.push(new rsvp.Promise(function (resolve, reject) {
// 				helper.requestTitle(request.query.address[counter], function (title) {
// 					resolve(title);
// 				});
// 			}));
// 		}
// 		rsvp.all(promises).then(function (responseText) {
// 			responseText.map(function (item) {
// 				view.description(response, item);
// 			});
			
// 		});
// 	} else {
// 		var promise = new RSVP.Promise(function (resolve, reject) {
// 			helper.requestTitle(request.query.address, function (title) {
// 				resolve(title);
// 			});
// 		});
// 		promise.then(function (responseText) {
// 			view.description(response, responseText);
	
// 		});
// 	}
// };


