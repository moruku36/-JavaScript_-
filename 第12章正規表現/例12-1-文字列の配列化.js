function stringToArray(s) {
	return s.match(/[\s\S]/ug) || [];
}
stringToArray("𩸽の干物");