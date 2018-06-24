function partial(f) {
	// 内側の関数でargumentsを利用するために保存
	var args = arguments;
	return function() {
		// argsをインデックス１からaにコピー
		var a = Array.prototype.slice.call(args,1);
		for(var i=0, j=0; i<a.length; i++) {
			// undefinedなら内側の引数使用する
			if( a[i] == undefined ) a[i] = arguments[j++];
		}
		return f.apply(this,a);
	}
}
var square = partial(Math.pow,undefined,2);		// 自乗を求める関数
var sqrt = partial(Math.pow,undefined,.5);		// 平方根を求める関数
var cubicroot = partial(Math.pow,undefined,1/3);// 立方根を求める関数
var exp = partial(Math.pow,Math.E,undefined);	// exp(x)：指数関数
console.log("square(2) =", square(2));
console.log("sqrt(2) =", sqrt(2));
console.log("cubicroot(2) =", cubicroot(2));
console.log("exp(2) =", exp(2));