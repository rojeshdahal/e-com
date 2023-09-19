import * as React from "react";
import { Typography, Button, Toolbar, Box, AppBar, List } from "@mui/material";
import { FaShopify } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoIosLogIn } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import "../App.css";

export default function ButtonAppBar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[100],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  return (
    <Box mb={"200px"}>
      <AppBar position="fixed" theme={theme}>
        <Toolbar>
          <FaShopify />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Shopify
          </Typography>
          <List
            sx={{
              display: "flex",
              flexFlow: "row",
              textDecoration: "none",
              fontSize: "",
            }}
          >
            <Button>
              <NavLink to="/" className="navlink">
                Home
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/about" className="navlink">
                About
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/products" className="navlink">
                Products
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/contact" className="navlink">
                Contact
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/login">
                <IconButton>
                  <IoIosLogIn />
                  <h5>Login</h5>
                  {/* <Button color="inherit">Login</Button> */}
                </IconButton>
              </NavLink>
            </Button>

            <Button>
              <NavLink to="/cart" className="navlink">
                <IconButton aria-label="cart">
                  <BsCart4 />
                </IconButton>
              </NavLink>
            </Button>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
