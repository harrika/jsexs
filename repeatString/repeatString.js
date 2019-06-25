const repeatString = function(mm,n) {
	ss = '';
	if (n<0) { return 'ERROR'; }
	for (var a=0; a<n; a++) {
		ss += mm;
	}
	return ss;
}

module.exports = repeatString
