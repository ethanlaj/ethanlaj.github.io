(function () {
	window.addEventListener("load", initGlobal);

	function initGlobal() {
		$("#navbar").load('navbar.html');
		$("#header").load('header.html');
	}
})();