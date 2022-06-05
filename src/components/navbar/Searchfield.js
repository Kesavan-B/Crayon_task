import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, InputBase, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "#000",
    border: "1px solid #959595",
    borderRadius: "5px",
    height: "12px",
    [theme.breakpoints.up("md")]: {
      width: "35ch",
      "&:focus": {
        width: "15ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "white",}}>
        <Toolbar className="search-input" >
          <Search  >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for your favorite Bicycles"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Link href="#" underline="none" className="carticn">
            {"Register My Bike"}
          </Link>
          <Link href="#" underline="none" className="carticn">
            {"Store Locator"}
          </Link>
          <Link href="#" underline="none" className="carticn">
            {"Warranty"}
          </Link>
          <Link href="#" className="carticn">
          <ShoppingCartIcon/>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
