// Projects.tsx

import React from "react";
import "../Projects.css";
import Project from "./Project";

interface ProjectData {
	id: number;
	title: string;
	description: string;
	link: string;
	previewImageUrl: string;
	githubLink: string;
	tools: string[];
}

interface ProjectsProps {
	projects: ProjectData[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<div>
			<h1 className="text-center">Featured Projects</h1>
			<div id="projects">
				{projects.map((project) => (
					<Project
						key={project.id}
						title={project.title}
						description={project.description}
						link={project.link}
						previewImageUrl={project.previewImageUrl}
						githubLink={project.githubLink}
						tools={project.tools}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
