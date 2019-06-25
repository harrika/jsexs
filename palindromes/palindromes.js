const palindromes = function(ss) {
	ss = ss.toLowerCase();
	ss1 = ss.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g,'');
	ss2 = ss1.split(' ').join('');
	ss3 = ss2.split('');
	bg = ss3
	while (bg.length>1) {
		if (bg[0] != bg[bg.length-1]) {
			return false;
		} else {
			 bg = bg.slice(1,bg.length-1);
		}	
	}	
	return true;
}

module.exports = palindromes

