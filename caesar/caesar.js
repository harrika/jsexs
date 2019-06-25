const caesar = function(user_string, n) {
	var alfa_lower = "abcdefghijklmnopqrstuvwxyz"
	var alfa_upper = alfa_lower.toUpperCase();
	var alfabet = alfa_lower+alfa_upper;
	newString = '';

	for (let i=0; i<user_string.length; i++) {
		e = user_string[i];
		if (alfabet.indexOf(e) == -1) {
			newString += e;
		} else {
			var ex = e.charCodeAt(0); //convert e to ascii
			var lowerb = 97 //a
			var upperb = 122  //z
			if ((ex>=65) && (ex<=90)) {
				lowerb = 65  //A
				upperb = 90  //Z
			}
			ex += (n%26);
			if (ex > upperb) {
				var diff = ex-upperb
				ex = lowerb+diff-1
			}

			if (ex < lowerb) {
				var diff = lowerb-ex
				ex = upperb - diff+1
			}

			exs = String.fromCharCode(ex);  //convert back to char
			newString += exs; //append to new string
		}
	}
	return newString;
	
}
 	 
module.exports = caesar

// bb = caesar("london is burning", 17);
// console.log(bb);