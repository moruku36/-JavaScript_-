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
var a = [1,2,3];
permutation(a).forEach(function(v) { console.log(v); });