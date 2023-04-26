//TODO: Host with Firebase

import React from "react";
import "../Projects.css";
import ProjectOverlay from "./ProjectOverlay";

interface ProjectProps {
	title: string;
	description: string;
	link: string;
	githubLink: string;
	tools: string[];
	previewImageUrl: string;
}

const Project: React.FC<ProjectProps> = ({
	title,
	description,
	link,
	githubLink,
	tools,
	previewImageUrl,
}) => {
	return (
		<div className="project-container">
			<img className="project-preview" src={previewImageUrl} alt={title} />
			<ProjectOverlay
				title={title}
				description={description}
				link={link}
				githubLink={githubLink}
				tools={tools}
			></ProjectOverlay>
		</div>
	);
};

export default Project;
