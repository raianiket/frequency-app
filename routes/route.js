var request = require("request");
var fs = require('fs');

module.exports = function(app, db) {
	function splitByWords(text) {
		var wordsArray = text.split(/\s+/);
		return wordsArray;
	}

	function createWordMap(wordsArray) {
		var wordsMap = {};
		
		wordsArray.forEach(function(key) {
			if (wordsMap.hasOwnProperty(key)) {
				wordsMap[key]++;
			} else {
				wordsMap[key] = 1;
			}
		});
		return wordsMap;
	}


	function sortByCount(wordsMap) {
		var finalWordsArray = [];
		finalWordsArray = Object.keys(wordsMap).map(function(key) {
			return {
				name: key,
				total: wordsMap[key]
			};
		});

		finalWordsArray.sort(function(a, b) {
			return b.total - a.total;
		});
		return finalWordsArray;
	}

	app.get('/', function (req,res) {
		res.render('index.html')
	})

	app.post('/topnwords', function(req, res) {
		var n = req.body.number
		request("http://terriblytinytales.com/test.txt", function(err, response, body) {
			if (err) {
				console.log("err-----", err)
			}
			fs.writeFile("test.txt", body, function(err) {
				if (err) {
					return console.log(err);
				}

				var file = "test.txt"
				fs.readFile(file, 'utf8', function(err, data) {
					if (err) throw err;

					var wordsArray = splitByWords(data);
					var wordsMap = createWordMap(wordsArray);
					var finalWordsArray = sortByCount(wordsMap);
	
					var finalcount = []
					for (var i = 0; i < n; i++) {
						finalcount.push(finalWordsArray[i])
					}
					
					res.send({ data : finalcount });
				});
			})
		});
	})

}