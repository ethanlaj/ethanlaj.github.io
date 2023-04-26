(function () {
	window.addEventListener("load", init);

	/**
	 * Adds click listeners to each project box
	 */
	function init() {
		let projectBoxes = document.querySelectorAll(".project-box");
		for (let projectBox of projectBoxes) projectBox.addEventListener("click", openProject);
	}

	/**
	 * When a user clicks on the project box div, it will redirect them to the correct project page.
	 * If they click on the github logo, it will only open the github for that project on a separate page.
	 */
	function openProject() {
		let href = "";

		let githubButton = this.querySelector(".github");

		if (githubButton && githubButton.matches(":hover")) {
			// do not open project since github button was clicked
		} else {
			switch (this.id) {
				case "yolo-cpp-api": {
					return window.open("https://github.com/ethanlaj/yolo-cpp-api");
				}
				case "couple-trivia": {
					return window.open("https://youtu.be/99za1ogBe78");
				}
				case "labshare": {
					return window.open("https://labshare.xyz");
				}
				case "checkout-system": {
					href = "/Projects/checkout-system/checkout-system.html";
					break;
				}
				case "amazon-affiliate-bot": {
					href = "/Projects/amazon-affiliate-bot/amazon-affiliate-bot.html";
					break;
				}
				case "resell-bot": {
					href = "/Projects/resell-bot/resell-bot.html";
					break;
				}
				case "techops": {
					href = "/Projects/techops/techops.html";
					break;
				}
			}

			window.location = href;
		}
	}
})();
