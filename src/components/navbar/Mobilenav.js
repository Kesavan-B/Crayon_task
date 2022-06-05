import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { MdPedalBike } from "react-icons/md";
import { BsGearWide } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { FiFramer } from "react-icons/fi";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function Mobilenav() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h1 style={{ textAlign: "center" }}>Filters</h1>
        <Divider />
        <div style={{ display: "flex" }} className="mobnav-fil-head">
          <div className="pedal-icn">
            <MdPedalBike />
          </div>
          <div className="pedal-head">
            <p>CYCLE BY CATEGORIES</p>
          </div>
        </div>
        {["Men Bikes", "Women Bikes", "Boys Bikes", "Girls Bikes"].map(
          (text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        <div style={{ display: "flex" }} className="mobnav-fil-head">
          <div className="pedal-icn">
            <BsGearWide />
          </div>
          <div className="pedal-head">
            <p>Gears</p>
          </div>
        </div>
        {["Geared", "Single Speed"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div style={{ display: "flex" }} className="mobnav-fil-head">
          <div className="pedal-icn">
            <CurrencyRupeeIcon />
          </div>
          <div className="pedal-head">
            <p>Cycle By Price</p>
          </div>
        </div>
        {[
          "₹ 5000 - ₹ 10,000",
          "₹ 10,000 - ₹ 15,000",
          "₹ 15,000 - ₹ 20,000",
          "₹ 20,000 - ₹ 25,000",
          "₹ 25,000 +",
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div style={{ display: "flex" }} className="mobnav-fil-head">
          <div className="pedal-icn">
            <GiCartwheel />
          </div>
          <div className="pedal-head">
            <p>Wheel Size</p>
          </div>
        </div>
        {[
          <div className="cyclecat-mobnav">
            <div className="inch-btn-mobnav">
              <Button variant="outlined" disabled size="small">
                14 Inches
              </Button>
              <Button variant="outlined" size="small" disabled>
                16 Inches
              </Button>
              <Button variant="outlined" size="small" disabled>
                20 Inches
              </Button>
              <Button variant="outlined" size="small">
                24 Inches
              </Button>
              <Button variant="outlined" size="small">
                26 Inches
              </Button>
              <Button variant="outlined" size="small">
                27.5 Inches
              </Button>
              <Button variant="outlined" size="small">
                29 Inches
              </Button>
              <Button variant="outlined" size="small">
                700c
              </Button>
            </div>
          </div>,
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div style={{ display: "flex" }} className="mobnav-fil-head">
          <div className="pedal-icn">
            <FiFramer />
          </div>
          <div className="pedal-head">
            <p>Frame</p>
          </div>
        </div>
        {["Steel", "Alloy", "Carbon"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Grid
      sx={{ display: "block" }}
      md={{ display: "block" }}
      className="mobnav"
    >
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              onClick={toggleDrawer(anchor, true)}
              position="fixed"
              bottom="0"
              className="filter-tab"
            >
              <FilterAltIcon /> Filter
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
              <Button style={{ background: '#221629', color: '#ffdc00',position:'sticky',bottom:'0',zIndex:'99'}}>
                Apply
              </Button>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </Grid>
  );
}

export default Mobilenav;
