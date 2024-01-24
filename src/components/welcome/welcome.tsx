import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Box } from "@mui/material";
import "./welcome.css";

const Welcome: React.FC = () => {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};
const handleSignupClick=()=>{
navigate("/signup")

}
	return (
		<div className="welcome">
			<Container component="main" maxWidth="xs" className="welcome__card">
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div className="welcome__circle-placeholder"></div>
					<h2 className="welcome__heading">Welcome to WonderWriters</h2>
					<div className="welcome__line"></div>
					<Button
						className="welcome__button"
						variant="contained"
						fullWidth
						sx={{
							mt: 3,
							mb: 2,
							fontFamily: '"Merriweather", serif',
							backgroundColor: "#1655f2;",
						}}
						onClick={handleLoginClick}
					>
						Login
					</Button>
					<Button
          onClick={handleSignupClick}  
						className="welcome__button"
						variant="contained"
						fullWidth
						sx={{ mt: 3, mb: 2, fontFamily: '"Merriweather", serif' }}
					>
						Sign Up
					</Button>
				</Box>
			</Container>
		</div>
	);
};

export default Welcome;
