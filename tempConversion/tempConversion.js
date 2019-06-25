const ftoc = function(ff) {
	//conversion [°C] = ([°F] − 32) × ​5⁄9
	var cc = (ff-32)*5/9;
	return Number(cc.toFixed(1));
}

const ctof = function(cc) {
	// conversion [°F] = [°C] × ​9⁄5 + 32
	var ff = (cc*9/5)+32;
	return Number(ff.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
