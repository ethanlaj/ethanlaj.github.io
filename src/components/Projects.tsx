// Projects.tsx

import React from "react";
import "../Projects.css";
import Project from "./Project";
import { Project as ProjectData } from "../interfaces/Project";

interface ProjectsProps {
	projects: ProjectData[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<div>
			<h1 className="text-center">Featured Projects</h1>
			<div id="projects">
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
