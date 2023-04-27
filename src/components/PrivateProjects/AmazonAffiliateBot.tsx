import styles from "./PrivateProject.module.css";

const AmazonAffiliateBot = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Amazon Affiliate Bot</h1>
			<div className={styles.section}>
				<h2 className={styles.subtitle}>Overview</h2>
				<p>
					The Amazon Affiliate Bot, built using Node.js runtime and the Puppeteer npm
					package, was designed to streamline my affiliate marketing efforts. As an Amazon
					affiliate, I wanted to automate the process of visiting the affiliate website,
					extracting product promotion details, and sharing them on a Facebook group.
					Operating on a Raspberry Pi between 6am and 12am, the bot enables me to generate
					passive income by consistently posting deals every 3-4 minutes, ensuring it
					doesn't get flagged by Facebook for bot usage.
				</p>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Skills Utilized</h2>
				<ul className={styles.skills}>
					<li>Node.js</li>
					<li>Javascript</li>
					<li>NPM</li>
					<li>Puppeteer</li>
					<li>Web Scraping</li>
				</ul>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Screenshots</h2>
				<div className={styles.medias}>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/amazonAffiliateBot/success.png"
							alt="Alert Example"
						/>
						<figcaption>Commissions Earned in a 90-Day Period</figcaption>
					</figure>
				</div>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Demos</h2>
				<div className={styles.medias}>
					<figure>
						<video className={styles.media} controls>
							<source
								src="/privateProjects/amazonAffiliateBot/startup.mp4"
								type="video/mp4"
							/>
							<source
								src="/privateProjects/amazonAffiliateBot/startup.webm"
								type="video/webm"
							/>
							Your browser does not support the video tag.
						</video>
						<figcaption>Initial Startup and Amazon Login</figcaption>
					</figure>
					<figure>
						<video className={styles.media} controls>
							<source
								src="/privateProjects/amazonAffiliateBot/scrape.mp4"
								type="video/mp4"
							/>
							<source
								src="/privateProjects/amazonAffiliateBot/scrape.webm"
								type="video/webm"
							/>
							Your browser does not support the video tag.
						</video>
						<figcaption>Scraping Deal Data</figcaption>
					</figure>
					<figure>
						<video className={styles.media} controls>
							<source
								src="/privateProjects/amazonAffiliateBot/post.mp4"
								type="video/mp4"
							/>
							<source
								src="/privateProjects/amazonAffiliateBot/post.webm"
								type="video/webm"
							/>
							Your browser does not support the video tag.
						</video>
						<figcaption>Posting Deal</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default AmazonAffiliateBot;
