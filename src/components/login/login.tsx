import jwtDecode from 'jwt-decode';
import React, { useState } from "react";
import { Button, TextField, Container, Box } from "@mui/material";
import "../../styles/variables.css";
import "./login.css";
import { Link,useNavigate} from "react-router-dom";
import {useUser} from "../../contexts/UserContext";

interface JWTPayload {
  username: string;}

const Login = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
const { setUser } = useUser();
  const navigate = useNavigate();


	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log("Login with: ", username, password);

		const loginSuccess = (username: string) => {
      const user = { username };
      setUser(user);
			navigate("/");
		
  
	};
	loginSuccess(username);};

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	return (
		<div className="login">
			<Container component="main" maxWidth="xs" className="login__card">
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<h2 className="login__heading">Login</h2>
					<img
						src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1705883014/login_lbso0i.png"
						alt="Logo"
						className="login__image"
					></img>
					<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
						<TextField
							sx={{
								"& .MuiOutlinedInput-root": {
									"&:hover fieldset": {
										borderColor: "#FD641F",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#FD641F",
									},
								},
								"& .MuiInputLabel-root": {
									"&:hover": {
										color: "#FD641F",
									},
									"&.Mui-focused": {
										color: "#FD641F",
									},
								},
							}}
							className="login__textfields"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							autoFocus
							value={username}
							onChange={handleUsernameChange}
						/>
						<TextField
							sx={{
								"& .MuiOutlinedInput-root": {
									"&:hover fieldset": {
										borderColor: "#FD641F",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#FD641F",
									},
								},
								"& .MuiInputLabel-root": {
									"&:hover": {
										color: "#FD641F",
									},
									"&.Mui-focused": {
										color: "#FD641F",
									},
								},
							}}
							className="login__textfields"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={password}
							onChange={handlePasswordChange}
						/>
						<Button
							className="login__signin-button"
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Login
						</Button>
						<div className="login__register-text-container">
							{" "}
							<p className="login__password-reset-text"> Forgot Password?</p>
							<p className="login__password-reset-text">
								{" "}
								Not a Member Yet? <Link to="/signup"className="login__password-reset-text" >Register</Link>
							</p>
						</div>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Login;
