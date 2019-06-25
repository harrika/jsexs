const removeFromArray = function(arr, p) {
	for (var i = 1; i < arguments.length; i++) {
		var p = arr.indexOf(arguments[i]);
		if (p >= 0) {
			arr.splice(p,1);
		}
				
	}
	return arr;
}

module.exports = removeFromArray
