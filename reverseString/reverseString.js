const reverseString = function(ss) {
	var aa  = ss.split('');
	var bb = aa.reverse();
	var cc = aa.join('');
	return cc;
}

module.exports = reverseString

//console.log(reverseString('hello gal'));
