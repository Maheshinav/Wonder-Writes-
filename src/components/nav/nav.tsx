import React, { useState } from "react";
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

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static" sx={{ backgroundColor: "#FDBD29" }}>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
				className="navbar"
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
						src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1705710101/ww-high-resolution-logo-transparent_z3eelh.png"
						alt="Logo"
						style={{ maxHeight: 30 }}
					/>
				</Box>

				<Box sx={{ flexGrow: 1 }} />
				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>Read</MenuItem>
					<MenuItem onClick={handleClose}>Write</MenuItem>
          <MenuItem onClick={handleClose}>Subscription Plans</MenuItem>
					<MenuItem onClick={handleClose}>About Us</MenuItem>
				</Menu>
				<Box sx={{ flexGrow: 1 }} />
				<AccountCircle sx={{ fontSize: 30, color: "#0E100F" }} />
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
