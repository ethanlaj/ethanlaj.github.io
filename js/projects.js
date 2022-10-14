(function () {
	window.addEventListener("load", init);

	/**
	 * Adds click listeners to each project box
	 */
	function init() {
		let projectBoxes = document.querySelectorAll(".project-box");
		for (let projectBox of projectBoxes)
			projectBox.addEventListener("click", openProject);
	}

	/**
	 * When a user clicks on the project box div, it will redirect them to the correct project page.
	 * If they click on the github logo, it will only open the github for that project on a separate page.
	 */
	function openProject() {
		let href = "";
		switch (this.id) {
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

		let githubButton = this.children.namedItem("github");

		if (!githubButton || !githubButton.matches(':hover'))
			window.location = href;
	}
})();