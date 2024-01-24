import React, { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
	Button,
	TextField,
	Container,
	Box,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from "@mui/material";
import "./signup.css";

interface ICountry {
	name: string;
	code: string;
}

const Signup: React.FC = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [birthYear] = useState<string>("");
	const [birthMonth, setBirthMonth] = useState<string>("");
	const [birthDate, setBirthDate] = useState<Date | null>(null);
	const [country, setCountry] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [countries, setCountries] = useState<ICountry[]>([]);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => {
				const countryNames: ICountry[] = data.map((country: any) => ({
					name: country.name.common,
					code: country.cca2,
				}));
				setCountries(countryNames);
			})
			.catch((error) => console.error("Error fetching countries:", error));
	}, []);

	const isPasswordValid = (password: string) => {
		const hasNumbers = /\d/.test(password);
		const hasLetters = /[a-zA-Z]/.test(password);
		return hasNumbers && hasLetters && password.length >= 8;
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword || !isPasswordValid(password)) {
			setPasswordError(true);
			return;
		}

		console.log("Signup with: ", {
			username,
			password,
			birthYear,
			birthMonth,
			country,
			email,
		});
	};

	return (
		<div className="signup">
			<Container component="main" maxWidth="xs" className="signup__card">
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<h2 className="signup__heading">SignUp</h2>
					<img
						src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1706047443/signup-1_yy3zxy.png"
						alt="Logo"
						className="signup__image"
					/>
					<form onSubmit={handleSubmit}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							autoFocus
							value={username}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setUsername(e.target.value)
							}
							className="signup__textfields"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="new-password"
							value={password}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setPassword(e.target.value)
							}
							className="signup__textfields"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="confirmPassword"
							label="Confirm Password"
							type="password"
							id="confirm-password"
							autoComplete="new-password"
							value={confirmPassword}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setConfirmPassword(e.target.value)
							}
							className="signup__textfields"
							error={passwordError}
							helperText={
								passwordError
									? "Passwords do not match or are not complex enough"
									: ""
							}
						/>
						
						<FormControl
  fullWidth
  margin="normal"
  className="signup__textfields"
>
  <DatePicker
    views={["year", "month", "day"]}
    label="Birthday*"
    value={birthDate}
    onChange={(newValue: Date | null) => {
      setBirthDate(newValue);
      if (newValue) {
        const formattedDate = `${newValue.getFullYear()}-${newValue.getMonth() + 1}-${newValue.getDate()}`;
        setBirthMonth(formattedDate); 
      }
    }}
  />
</FormControl>


						<FormControl
							fullWidth
							margin="normal"
							className="signup__textfields"
						>
							<InputLabel id="country-select-label">Country</InputLabel>
							<Select
								labelId="country-select-label"
								id="country"
								value={country}
								label="Country"
								onChange={(e) => setCountry(e.target.value as string)}
								className="signup__textfields"
							>
								{countries.map((c) => (
									<MenuItem key={c.code} value={c.name}>
										{c.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							value={email}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setEmail(e.target.value)
							}
							className="signup__textfields"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							className="signup__sign-in-button"
							sx={{ mt: 3, mb: 2 }}
						>
							Signup
						</Button>
					</form>
					<p className="signup__password-reset-text">
						Already have an account? Login
					</p>
				</Box>
			</Container>
		</div>
	);
};

export default Signup;
