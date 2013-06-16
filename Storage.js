
function Storage() {
	'use strict';

	var _Storage = function () {};
	_Storage.prototype.add = function (key, content) {
		localStorage[key] = content;
	};

	_Storage.prototype.addJSON = function (key, content) {
		localStorage[key] = JSON.stringify(content);
	};

	_Storage.prototype.get = function (key) {
		return localStorage[key];
	};

	_Storage.prototype.getJSON = function (key) {
		return JSON.parse(localStorage[key]);
	};

	/*
	 * Updates data key with the items in content
	 */
	_Storage.prototype.JSONMerge = function (key, content) {
		if (content === undefined) throw "JSONMerge: Not enough arguments";
		var oldData = {};
		if (localStorage[key] !== undefined) {
			oldData = JSON.parse(localStorage[key]);
		}
		var newData = content;
		if (Object.prototype.toString.call(content) === '[object String]') {
			newData = JSON.parse(content);
		}

		for (var i in newData) {
			if (newData.hasOwnProperty(i)) {
				oldData[i] = newData[i];
			}
		}
		localStorage[key] = JSON.stringify(oldData);
	};

	return new _Storage;
}

var storage = Storage();
