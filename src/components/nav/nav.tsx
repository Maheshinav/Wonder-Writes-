import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import "./nav.css";

const Nav: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const navigate = useNavigate();

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleProfileClick = () => {
		navigate("/welcome");
	};

	const handleHomeClick = () => {
		navigate("/home");
	};

	return (
		<AppBar
			position="static"
			sx={{ backgroundColor: "#FDBD29" }}
			className="navbar"
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<IconButton
					edge="start"
					sx={{ color: "#0E100F" }}
					aria-label="menu"
					onClick={handleMenu}
				>
					<MenuIcon />
				</IconButton>

				<Box sx={{ flexGrow: 20, display: "flex", justifyContent: "center" }}>
					<img
						src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1706085655/LOGO_wtrvqq.png"
						alt="Logo"
						style={{ maxHeight: 30 }}
						onClick={handleHomeClick}
					/>
				</Box>

				<Box sx={{ flexGrow: 1 }} />

				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
					keepMounted
					transformOrigin={{ vertical: "top", horizontal: "right" }}
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>Read</MenuItem>
					<MenuItem onClick={handleClose}>Write</MenuItem>
					<MenuItem onClick={handleClose}>Subscription Plans</MenuItem>
					<MenuItem onClick={handleClose}>About Us</MenuItem>
				</Menu>

				<Box sx={{ flexGrow: 1 }} />
				<IconButton sx={{ color: "#0E100F" }} onClick={handleProfileClick}>
					<AccountCircle sx={{ fontSize: 30 }} />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
