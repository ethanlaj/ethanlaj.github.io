import React from "react";
import Projects from "../components/Projects";
import "../App.css";

const fakeProjects = [
	{
		id: 1,
		title: "Project One",
		description:
			"This is a description for Project One. It is a web application built with React and TypeScript.",
		link: "https://example.com/project-one",
		githubLink: "https://github.com/user/project-one",
		tools: [
			"React",
			"TypeScript",
			"Redux",
			"Express",
			"React",
			"TypeScript",
			"Redux",
			"Express",
		],
		previewImageUrl: "https://via.placeholder.com/350x250?text=Project+One",
	},
	{
		id: 2,
		title: "Project Two",
		description:
			"This is a description for Project Two. It is a mobile application built with React Native.",
		link: "https://example.com/project-two",
		githubLink: "https://github.com/user/project-two",
		tools: ["React Native", "Expo", "Node.js"],
		previewImageUrl: "https://via.placeholder.com/350x250?text=Project+Two",
	},
	{
		id: 3,
		title: "Project Three",
		description:
			"This is a description for Project Three. It is a machine learning project using Python and TensorFlow.",
		link: "https://example.com/project-three",
		githubLink: "https://github.com/user/project-three",
		tools: ["Python", "TensorFlow", "Keras", "NumPy"],
		previewImageUrl: "https://via.placeholder.com/350x250?text=Project+Three",
	},
];

const App: React.FC = () => {
	return (
		<main>
			<Projects projects={fakeProjects} />
		</main>
	);
};

export default App;
