import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} index />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;
