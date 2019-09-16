var request = require('request');
var cheerio = require('cheerio');

module.exports = {
	requestTitle: (address, getTitle) => {
		
		if (!address.includes('http')) {
			address = 'http://' + address;
		}
		var url = address;
		request(url, function (error, response, body) {
			var output = address;   
			if (!error && response.statusCode === 200) {
				var $ = cheerio.load(body);
				
				var title = $("head > title").text().trim();
			
				if (title) {
	
					getTitle(url + "      - " + title);
					output = `[${title}](${url})`;
				} else {
					getTitle(url + " - No title found");
				}
			} else {

				getTitle(url + " - NO RESPONSE");
			}

		});

	},
	getCompleteUrl: function (i, callback) {
		return callback(i);
	},

}
