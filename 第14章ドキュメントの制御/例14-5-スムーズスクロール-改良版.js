// 例14-5のスムーズスクロールは、場合によってスクロール後に要素が表示領域の上端から
// 少しズレてしまします。これを、scrollIntoViewメソッドを用いて補正し、ピッタリと
// 要素が上端になるようにしています。
function smoothScroll(id,durationTime) {
	var TIME_INTERVAL = 30;
	var element = document.getElementById(id);
	if( !element ) return;
	var ey = element.getBoundingClientRect().top;
	var dy = ey*TIME_INTERVAL/durationTime;
	var direction = dy>0 ? 1 : -1;
	var timer = setInterval(function() {
		scrollBy(0,dy); ey -= dy;
		if( direction*ey <= 0 ) {
			clearInterval(timer);
			element.scrollIntoView();
		}
	}, TIME_INTERVAL);
}