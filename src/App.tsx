
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import WelcomePage from "./pages/Welcomepage";
import LoginPage from "./pages/Loginpage";

const App = () => {
	return (
		<Router>
			<ConditionalNav />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/welcome" element={<WelcomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Router>
	);
};

const ConditionalNav = () => {
	const location = useLocation();

	if (location.pathname === "/welcome" || location.pathname === "/login") {
		return null;
	}

	return <Nav />;
};

export default App;
