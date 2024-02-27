
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import WelcomePage from "./pages/Welcomepage";
import LoginPage from "./pages/Loginpage";
import SignupPage from "./pages/Signuppage";
import { UserProvider } from './contexts/UserContext';

const App = () => {
	return (
	<LocalizationProvider dateAdapter={AdapterDateFns}>
	 <UserProvider> 
		<Router>
			<ConditionalNav />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/welcome" element={<WelcomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path ="/signup" element={<SignupPage/>}/>
			</Routes>
		</Router>
		  </UserProvider>
		</LocalizationProvider>
	);
};

const ConditionalNav = () => {
	const location = useLocation();

	if (location.pathname === "/welcome" || location.pathname === "/login" || location.pathname==="/signup") {
		return null;
	}

	return <Nav />;
};

export default App;
