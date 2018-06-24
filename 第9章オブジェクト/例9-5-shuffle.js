Array.prototype[Symbol.for("shuffle")] = function() {
	var a = this;
	var m = a.length, t, i;
	while(m) { // mが0になったら終了する
		i = Math.floor(Math.random()*m--);	// m未満のインデックスiをランダムに選びmを１つ減ずる
		t = a[m]; a[m] = a[i]; a[i] = t;	// a[i]とa[m]を交換する
	}
	return this;
};
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[Symbol.for("shuffle")]());