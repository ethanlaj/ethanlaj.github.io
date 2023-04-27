import React from "react";
import Projects from "../components/Projects";
import "../App.css";

const projects = [
	{
		title: "YOLO C++ API",
		description: "Real time object detection with a GUI to control detection settings.",
		route: "/projects/YoloAPI",
		githubLink: "https://github.com/ethanlaj/yolo-cpp-api",
		tools: ["C++", "OpenCV", "QT", "GStreamer", "Jetson Nano"],
		previewImageUrl: "/privateProjects/yoloAPI/v7.png",
	},
	{
		title: "LabShare",
		description: "A collaborative social networking platform designed for scientists.",
		link: "https://labshare.xyz",
		githubLink: "https://github.com/ethanlaj/labshare",
		tools: ["PHP", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "MySQL", "Google Cloud"],
		previewImageUrl: "/previews/labshare.png",
	},
	{
		title: "Couple Trivia",
		description:
			"A fun Valentine's trivia game to test and strengthen couples' knowledge of each other.",
		link: "https://www.youtube.com/watch?v=99za1ogBe78",
		linkBtnText: "Watch Video",
		githubLink: "https://github.com/ethanlaj/coupletrivia",
		tools: ["ReactJS", "JavaScript", "Node.js", "HTML", "CSS", "Bootstrap"],
		previewImageUrl: "/previews/coupletrivia.png",
	},
	{
		title: "TechOps Site",
		description:
			"Application for managing event staff at Elizabethtown College, utilized campus-wide for special events.",
		route: "/projects/TechOps",
		tools: ["C#", "ASP.NET Core", "JavaScript", "Bootstrap", "SQL Server"],
		previewImageUrl: "/previews/techops.png",
	},
	{
		title: "Checkout System",
		description: "Asset management system for the Elizabethtown College IT department.",
		route: "/projects/CheckoutSystem",
		tools: ["C#", "ASP.NET Core", "JavaScript", "Bootstrap", "SQL Server"],
		previewImageUrl: "/previews/checkoutSystem.png",
	},
	{
		title: "Amazon Affiliate Bot",
		description: "Automation of posting amazon affiliate promo codes to a Facebook group.",
		route: "/projects/AmazonAffiliateBot",
		githubLink: "https://github.com/ethanlaj/amazon-affiliate",
		tools: ["Node.js", "JavaScript", "NPM", "Puppeteer", "Raspberry Pi"],
		previewImageUrl: "/previews/amazonAffiliateBot.png",
	},
	{
		title: "Resell Bot",
		description:
			"Identifies profitable resale deals by comparing eBay and Walmart prices, alerting users on Discord.",
		route: "/projects/ResellBot",
		githubLink: "https://github.com/ethanlaj/resell-bot",
		tools: ["Node.js", "JavaScript", "NPM", "Heroku"],
		previewImageUrl: "/previews/resellBot.png",
	},
];

const App: React.FC = () => {
	return (
		<main>
			<Projects projects={projects} />
		</main>
	);
};

export default App;
