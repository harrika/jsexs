const leapYears = function(yy) {
	if ((yy%400==0) || ((yy%4 == 0) && (yy%100 != 0))) {
		return true;
	} else {
		return false;
	}
}

module.exports = leapYears
