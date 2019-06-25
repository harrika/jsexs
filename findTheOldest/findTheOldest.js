let findTheOldest = function(ppl) {

	const ordered = ppl.sort(function(a,b) {
		if (a.yearOfDeath == null) {
			a.yearOfDeath = new Date().getFullYear();
		}
		if (b.yearOfDeath == null) {
			b.yearOfDeath = new Date().getFullYear();
		}

	    return ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) 
	});

	return ordered[0];
}

module.exports = findTheOldest

