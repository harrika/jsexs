function add (a,b) {
  return a+b;	
}

function subtract (a,b) {
	return a-b;	
}

function sum (bb) {
	return bb.reduce((tot,b) => { return tot + b },0)
}

function multiply (bb) {
	return bb.reduce((tot,b) => { return tot * b },1)
}

function power(a,b) {
	return a**b;	
}

function factorial(c) {
	if (c==2) {
		return c;
	}
	if (c<2) {
		return 1;
	}
	return c*factorial(c-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
