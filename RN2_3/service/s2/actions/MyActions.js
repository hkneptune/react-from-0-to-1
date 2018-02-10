const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

var add = () => {
	return {
		type: INCREMENT		
	}
}

var minus = () => {
	return {
		type: DECREMENT		
	}
}


module.exports = {
	add,
	minus,
}