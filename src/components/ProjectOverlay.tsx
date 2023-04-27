import React from "react";
import { Link } from "react-router-dom";
import Tool from "./Tool";

interface ProjectOverlayProps {
	title: string;
	description: string;
	linkBtnText?: string;
	link?: string;
	route?: string;
	githubLink?: string;
	tools: string[];
}

const ProjectOverlay: React.FC<ProjectOverlayProps> = ({
	title,
	description,
	tools,
	linkBtnText,
	link,
	route,
	githubLink,
}) => {
	return (
		<div className="project-overlay">
			<div>
				<h1 className="project-title">{title}</h1>
				<p className="project-description">{description}</p>

				<div className="project-tools">
					{tools.map((tool, index) => (
						<Tool name={tool} key={index}></Tool>
					))}
				</div>
			</div>

			<div className="project-buttons">
				{route ? (
					<Link to={route} target="_blank" className="project-button">
						<div>Read More</div>
					</Link>
				) : (
					<a
						className={`project-button ${link ? "" : "hidden"}`}
						href={link ?? ""}
						target="_blank"
						rel="noopener noreferrer"
					>
						{linkBtnText ?? "Visit Website"}
					</a>
				)}
				<a
					className={`project-button ${githubLink ? "" : "hidden"}`}
					href={githubLink ?? ""}
					target="_blank"
					rel="noopener noreferrer"
				>
					View on GitHub
				</a>
			</div>
		</div>
	);
};

export default ProjectOverlay;
