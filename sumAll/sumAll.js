const sumAll = function(a,b) {

	if (!Number.isInteger(a) || !Number.isInteger(b)) {
		 return "ERROR";
	}
	if ( a<0 || b<0 ) {
		 return "ERROR";
	}

	if (a>b) {
		var tmp = a;
		a = b;
		b=tmp;
	}

	var tot = 0;	
	for (var i=a; i<=b; i++) {
		tot += i;
	}
	
	return tot;
}

module.exports = sumAll
