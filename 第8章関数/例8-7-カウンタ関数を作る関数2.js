function makeCounter() {
	var count = 0;
	return function() {
		return count++;
	};
}