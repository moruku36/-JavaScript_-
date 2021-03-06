/*------------------------------------------
  階乗を求める
 *------------------------------------------*/
// nの階乗を求める関数
function fact(n) {
	if( n<=1 ) return n;	// 再帰を終了させる
	return n*fact(n-1);		// 再帰呼び出しを行う
}
// iの値を１から9まで変えて、iの階乗をコンソールに出力する
for(var i=1; i<10; i++) {
	console.log(i + "! = " + fact(i));
}