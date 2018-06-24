/*---------------------------------------------------------------------------------*
 * クィックソート
 *    x：ソートする配列
 *    first：ソートする要素の開始位置
 *    last：ソートする要素の終了位置
 *---------------------------------------------------------------------------------*/
function quicksort(x,first,last) {
	var p = x[ Math.floor((first+last)/2) ];
	for(var i=first, j=last; ; i++, j--) {
		while( x[i]<p ) i++; // 左から順にp以上の要素を探す
		while( p<x[j] ) j--; // 右から順にp以下の要素を探す
		if( i>=j ) break;	// iとjが交差したら次に行く
		var w = x[i]; x[i] = x[j]; x[j] = w; // 見つかったらx[i]とx[j]を入れ替える
	}
	if( first < i-1 ) quicksort(x,first,i-1); // 左が2つ以上残っていれば左側を再びソート
	if( j+1 < last  ) quicksort(x,j+1,last);  // 右が2つ以上残っていれば右側を再びソート
}
var a = [7,2,5,1,8,9,3];
quicksort(a,0,a.length-1);
console.log(a);