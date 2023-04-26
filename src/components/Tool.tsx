import React from "react";

interface ToolProps {
	name: string;
}

const Tool: React.FC<ToolProps> = ({ name }) => {
	return <div className="tool">{name}</div>;
};

export default Tool;
