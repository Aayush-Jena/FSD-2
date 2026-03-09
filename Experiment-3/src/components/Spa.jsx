import { NavLink, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Spa() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ gap: 3 }}>
          <Typography
            component={NavLink}
            to="/"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            Home
          </Typography>

          <Typography
            component={NavLink}
            to="/about"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            About
          </Typography>

          <Typography
            component={NavLink}
            to="/contact"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            Contact
          </Typography>

          <Typography
            component={NavLink}
            to="/slider"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            Slider
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Box
        sx={{
           flexGrow: 1,
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
