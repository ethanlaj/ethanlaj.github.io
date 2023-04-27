//TODO: Host with Firebase

import React from "react";
import "../Projects.css";
import ProjectOverlay from "./ProjectOverlay";
import { Project as ProjectProps } from "../interfaces/Project";

const Project: React.FC<ProjectProps> = ({ previewImageUrl, title, ...rest }) => {
	return (
		<div className="project-container">
			<img className="project-preview" src={previewImageUrl} alt={title} />
			<ProjectOverlay title={title} {...rest}></ProjectOverlay>
		</div>
	);
};

export default Project;
