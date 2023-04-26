import React from "react";
import Tool from "./Tool";

interface ProjectOverlayProps {
	title: string;
	description: string;
	link: string;
	githubLink: string;
	tools: string[];
}

const ProjectOverlay: React.FC<ProjectOverlayProps> = ({
	title,
	description,
	tools,
	link,
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
				<a className="project-button" href={link} target="_blank" rel="noopener noreferrer">
					Visit Website
				</a>
				<a
					className="project-button"
					href={githubLink}
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
