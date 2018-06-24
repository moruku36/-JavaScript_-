/*===========================================================================*
 * トランプを生成するコンストラクタ
 *===========================================================================*/
function Card(suit,rank){
	this.suit = suit;	// スート（マーク）
	this.rank = rank;	// 番号
	Object.defineProperties(this,{
		color: {
			get: function(){
				switch( this.suit ){
				 	case "Club":    case "Spade": return "black";
				 	case "Diamond": case "Hearts": return "red";
				}
			}
		},
		symbol: {
			get: function(){ return Card.Suit[this.suit]+Card.Rank[this.rank]; }
		}
	});
}
// Cardコンストラクタのプロパティとしてトランプの基本情報を格納
// * 組札情報
Card.Suit = { Club: "♣", Spade: "♠", Diamond: "◆", Hearts: "♥" };
// * 番号情報
Card.Rank = {
	Two: "2", Three: "3", Four: "4", Five: "5", Six: "6", Seven: "7",
	Eight: "8", Nine: "9", Ten: "10", Jack: "J", Queen: "Q", King: "K", Ace: "A"
};
/*===========================================================================*
 * 新しいトランプの組（デッキ）を生成するコンストラクタ
 *===========================================================================*/
function Deck(){
	var cards = this.cards = [];
	for(var s in Card.Suit){
		for(var r in Card.Rank){
			cards.push(new Card(s,r));
		}
	}
}
// Fisher-Yates法でカードをシャッフルする
Deck.prototype.shuffle = function(){
	var a = this.cards;
	var m = a.length, t, i;
	while(m){
		i = Math.floor(Math.random()*m--);
		t = a[m]; a[m] = a[i]; a[i] = t;
	}
	return this;
};
// トランプを分けるメソッド
Deck.prototype.deal = function(n){
	if( this.cards.length<n ) throw new Error("カードがありません");
	return this.cards.splice(this.cards.length-n,n);
};