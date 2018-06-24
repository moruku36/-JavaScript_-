/*--------------------------------------------------------------------------*
 * ＜momorize（複数引数対応）の使用例＞
 * 複数引数に対応したメモ化関数memorizeの使用例として、竹内関数をとりあげます。
 * 竹内関数とは、次のように再帰的に定義される関数です。
 * 　　tak(x,y,z) =
 * 　　　　　x<=yのとき、y
 * 　　　　　そうでないとき、tak(tak(x-1,y,z),tak(y-1,z,x),tak(z-1,x,y))
 * 竹内関数は、処理を次々にたらい回ししていくことから、「たらい回し関数」とも呼ばれます。
 * 竹内関数は、引数によって再帰呼び出しの数が膨大になり、計算量が非常に大きくなります。
 * この例での値ｘ＝１４，ｙ＝８，ｚ＝０に対して、再帰呼び出しの回数は699579977となります。
 * 竹内関数は、メモ化することで高速化することができます。ここでの例に対して、Google
 * Chromeのコンソールで実行した場合、筆者の環境で、次のような実行時間となりました。
 * 　　　　単純な竹内関数（simpleTak）： 4706ms
 * 　　　　メモ化した竹内関数（memoTak）： 2ms
 *--------------------------------------------------------------------------*/
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
// メモ化した竹内関数
var memoTak = memorize(function(x,y,z) {
	return x <= y ? y :
		memoTak(memoTak(x-1,y,z),memoTak(y-1,z,x),memoTak(z-1,x,y));
});
console.time("momorized");
console.log(memoTak(14,8,0));
console.timeEnd("momorized");
// 単純な竹内関数
var simpleTak = function(x,y,z) {
	return x <= y ? y :
		simpleTak(simpleTak(x-1,y,z),simpleTak(y-1,z,x),simpleTak(z-1,x,y));
};
console.time("simple");
console.log(simpleTak(14,8,0));
console.timeEnd("simple");