module.exports = {
title : function(response){
		if(!response.finished){
			response.write("<h1>Following are the titles of given websites:</h2>");
			response.write("<ul>")
		}
	},
	description : function(response,title){
		if(!response.finished){
			response.write("<li>" + title + "</li>");
		}
	},
	errorLog : function(response,msg){
		if(!response.finished){
			response.write(msg);
		}
	}
}
