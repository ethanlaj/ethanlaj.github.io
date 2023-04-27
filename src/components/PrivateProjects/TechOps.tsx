import styles from "./PrivateProject.module.css";

const TechOps = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>TechOps Site</h1>
			<div className={styles.section}>
				<h2 className={styles.subtitle}>Overview</h2>
				<p>
					The Technical Operations website is an ASP.NET Core MVC application used across
					Elizabethtown College that helps manage staffing for events. I joined the
					project to complete the transition from LDAP to Microsoft Identity
					authentication and add more features to the website.
				</p>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Skills Utilized</h2>
				<ul className={styles.skills}>
					<li>C#</li>
					<li>ASP.NET Core</li>
					<li>.NET 5</li>
					<li>Microsoft Identity</li>
					<li>Model-View-Controller (MVC) pattern</li>
					<li>JavaScript</li>
					<li>HTML & CSS</li>
					<li>SQL & SQL Server</li>
					<li>Entity Framework Core</li>
					<li>TortoiseSVN</li>
					<li>FTP</li>
					<li>SMTP</li>
					<li>HTML Emails</li>
					<li>Scheduled Tasks</li>
				</ul>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Selected Fixes & Improvements:</h2>
				<ol>
					<li>Completed the transition to Microsoft Identity authentication.</li>
					<li>
						Email Notifications:
						<ul>
							<li>
								Implemented weekly email notifications with:
								<ul>
									<li>Upcoming Shifts</li>
									<li>New Events</li>
									<li>Available Open Positions</li>
								</ul>
							</li>
							<li>Configured scheduled tasks to automate email sending.</li>
						</ul>
					</li>
					<li>
						Position Groups:
						<ul>
							<li>Enabled restrictions on worker eligibility for event sign-ups.</li>
							<li>Facilitated adding and removing workers from groups.</li>
							<li>Enhanced the worker view to display event information.</li>
						</ul>
					</li>
					<li>
						Improved Settings View:
						<ul>
							<li>
								Redesigned the settings page by splitting workers, venues, and
								groups tables into separate pages, accessible via buttons on the
								main settings page.
							</li>
						</ul>
					</li>
				</ol>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Screenshots</h2>
				<div className={styles.medias}>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/techops/workerEventView.png"
							alt="Event Screen"
						/>
						<figcaption>Non-Admin Event Screen</figcaption>
					</figure>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/techops/settings.png"
							alt="Settings Screen"
						/>
						<figcaption>Settings Screen</figcaption>
					</figure>
					<figure>
						<div className={styles.mediaGroup}>
							<img
								className={`${styles.media} ${styles.tallMedia}`}
								src="/privateProjects/techops/email1.png"
								alt="Email Example 1"
							/>
							<img
								className={`${styles.media} ${styles.tallMedia2}`}
								src="/privateProjects/techops/email2.png"
								alt="Email Example 2"
							/>
						</div>
						<figcaption>Email Examples</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default TechOps;
