function memorize(f) {
	var cache = {};
	return function() {
		// キャッシュのキーとして引数をカンマで区切った文字列を使用する
		var key = "";
		for(var i=0; i<arguments.length; i++) key += arguments[i] + ",";
		if(cache[key] == undefined) cache[key] = f.apply(null,arguments);
		return cache[key];
	};
}