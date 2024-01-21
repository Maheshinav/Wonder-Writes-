import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import LoginPage from "./pages/Loginpage";

const App = () => {
	return (
		<div>
			<Router>
				<Nav />
				<Hero />
				<Routes>
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
