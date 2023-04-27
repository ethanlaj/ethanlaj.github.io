import styles from "./PrivateProject.module.css";

const ResellBot = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Resell Bot</h1>
			<div className={styles.section}>
				<h2 className={styles.subtitle}>Overview</h2>
				<p>
					The Resell Bot is a Node.js-based application designed to facilitate side hustle
					income for individuals seeking profitable resale opportunities. The bot
					leverages the power of eBay and Walmart APIs, matching UPCs of eBay listings
					with corresponding Walmart products to compare prices. If an eBay listing's
					price is higher, the bot notifies users in a Discord server about potential
					resale opportunities. By providing real-time, valuable information on profitable
					items, the Resell Bot serves as a valuable resource for resellers and
					enthusiasts looking to maximize their earnings.
				</p>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Skills Utilized</h2>
				<ul className={styles.skills}>
					<li>Node.js</li>
					<li>Javascript</li>
					<li>NPM</li>
					<li>API Usage</li>
					<li>Web Scraping</li>
				</ul>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Screenshots</h2>
				<div className={styles.medias}>
					<figure>
						<img
							className={styles.tallMedia3}
							src="/privateProjects/resellBot/alert.png"
							alt="Alert Example"
						/>
						<figcaption>Alert Example</figcaption>
					</figure>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/resellBot/ebay.png"
							alt="Ebay Listing"
						/>
						<figcaption>Ebay Listing</figcaption>
					</figure>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/resellBot/walmart.png"
							alt="Ebay Listing"
						/>
						<figcaption>Walmart Listing</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default ResellBot;
