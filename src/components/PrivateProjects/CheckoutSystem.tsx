import styles from "./PrivateProject.module.css";

const CheckoutSystem = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Checkout System</h1>
			<div className={styles.section}>
				<h2 className={styles.subtitle}>Overview</h2>
				<p>
					Continued the development of an ASP.NET Core MVC application using Entity
					Framework to manage asset check-in/check-out, featuring a touchscreen interface
					with 2D barcode and prox ID card scanners.
				</p>
			</div>
			<div className={styles.section}>
				<h2 className={styles.subtitle}>Skills Utilized</h2>
				<ul className={styles.skills}>
					<li>C#</li>
					<li>ASP.NET Core</li>
					<li>.NET 5</li>
					<li>Model-View-Controller (MVC) pattern</li>
					<li>JavaScript</li>
					<li>HTML & CSS</li>
					<li>SQL & SQL Server</li>
					<li>Entity Framework Core</li>
					<li>Active Directory</li>
					<li>TortoiseSVN</li>
					<li>FTP</li>
				</ul>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Selected Fixes & Improvements</h2>
				<ol className={styles.improvements}>
					<li>Upgraded the .NET version from 2.1 to 5.0 and added new features.</li>
					<li>
						Enhanced check-in/check-out process, including multiple items and
						authorizing user tracking.
					</li>
					<li>Implemented random barcode generation and fixed asset creation bug.</li>
					<li>
						Added the ability to delete and disable assets and improved role management.
					</li>
					<li>
						Developed inventory scanning and reporting features to track and manage
						assets.
					</li>
					<li>
						Created various reports such as overdue, lifetime loan, and asset checkout
						frequency.
					</li>
				</ol>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Screenshots</h2>
				<div className={styles.medias}>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/checkoutSystem/checkout-screen.png"
							alt="Checkout Screen"
						/>
						<figcaption>Checkout Screen</figcaption>
					</figure>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/checkoutSystem/startInventory.png"
							alt="Inventory Screen"
						/>
						<figcaption>Inventory Screen</figcaption>
					</figure>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/checkoutSystem/role-createmultiple.png"
							alt="Role Creation Screen"
						/>
						<figcaption>Role Creation Screen</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default CheckoutSystem;
