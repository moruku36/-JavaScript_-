function stringToArray(s) {
    return s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}
stringToArray("𩸽の干物");