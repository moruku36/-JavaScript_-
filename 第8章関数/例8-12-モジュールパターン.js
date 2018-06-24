var Module = Module || {};
(function(_Module) {
	var name = "NoName";	// プライベート変数
	function getName() {	// プライベート関数
		return name;
	}
	_Module.showName = function() {	// パブリック関数
		console.log(getName());
	};
	_Module.setName = function(x) {	// パブリック関数
		name = x;
	};
})(Module);
Module.setName("Tom");
Module.showName();