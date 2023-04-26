import styles from "./Header.module.css";

const Header = () => {
	return (
		<>
			<div className={styles.header}>
				<img src="/profile-pic.jpg" alt="Ethan Lajeunesse" />

				<h1>Ethan Lajeunesse</h1>
				<div className={styles.headerIcons}>
					<a className={styles.github} href="https://github.com/ethanlaj" target="_blank">
						<i className="devicon-github-original"></i>
					</a>
					<a
						className={styles.linkedin}
						href="https://www.linkedin.com/in/ethan-lajeunesse-aa0992253/"
						target="_blank"
					>
						<i className="devicon-linkedin-plain"></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default Header;
