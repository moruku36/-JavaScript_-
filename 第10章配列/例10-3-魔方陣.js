/*
	例10-2 配列のすべての順列のリストを取得する関数
*/
function permutation(a) {
	// 順列のリスト(list)を各順列に要素（element）を追加しながら更新して行く
	return a.reduce(function(list,element) {
		var newlist = [];	// この配列に新しい順列のリストを求める
		// 各順列（seq）毎に処理する
		list.forEach(function(seq) {
			// seqの末尾の後から先頭の前まで、順にelementを挿入し、各々をnewlistに追加して行く
			for(var i=seq.length; i>=0; i--) {
				var newseq = [].concat(seq);	// newseqにseqのコピーを取る
				newseq.splice(i,0,element);	// newseqのi番目の要素の前にelementを挿入
				newlist.push(newseq);	// newseqをnewlistの末尾に追加
			}
		});
		return newlist;	// 新しい順列のリストを次の要素に渡す
	},[[]]/* 初期値は空配列１つのリスト */);
}
/*
	例10-3 3×3 のすべての魔方陣を求める
*/
var N = 3;
// 1からNxNの要素を持つ配列aを生成
for(var i=1, a=[]; i<=N*N; i++) a = a.concat(i);
// NxN の２次元配列を生成
var m = new Array(N);
for(var i=0; i<N; i++) m[i] = new Array(N);
// aの順列を生成し、各順列pに対して、pから２次元配列mを作り、mが魔方陣かどうかを調べる
permutation(a).forEach(function(p) {
	// 順列（１次元配列）pを２次元配列mにコピー
	for(var i=0, index=0; i<N; i++) {
		for(var j=0; j<N; j++) {
			m[i][j] = p[index++];
		}
	}
	// 魔方陣ならば出力
	if( isMagicSquare(m) ) {
		m.forEach(function(v) { console.log(v); });
		console.log("—————");
	}
});
// 正方行列mが魔方陣かどうかを判定する関数
function isMagicSquare(m) {
	var n = m.length;
	var s = n*(n*n+1)/2;	// 行・列・対角線の和がこの値ならOK
	var sumDiagonalR = 0;	// 右斜め方向の対角線の和を求める
	var sumDiagonalL = 0;	// 左斜め方向の対角線の和を求める
	for(var i=0; i<n; i++) {
		var sumRow    = 0;	// 行の和を求める
		var sumColumn = 0;	// 列の和を求める
		for(var j=0; j<n; j++) {
			sumRow    += m[i][j];
			sumColumn += m[j][i]; 
		}
		if( sumRow != s || sumColumn != s ) return false;
		sumDiagonalR += m[i][i];
		sumDiagonalL += m[i][n-i-1];
	}
	if( sumDiagonalR != s || sumDiagonalL != s) return false;
	return true;
}