import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export default function SideBarButton() {
  const { logout } = UserAuth();
  const { user } = UserAuth();
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged Out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const homeMenuDiv = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1976d2",
    paddingLeft: "20px",
  };

  const homeMenuTextStyle = {
    fontSize: "20px",
    textAlign: "left",
    marginTop: "15px",
    marginBottom: "7px",
    cursor: "pointer",
    color: "white",
  };

  const homeMenuIconStyle = {
    fontSize: "23px",
    marginRight: "5px",
    color: "white",
  };

  const menuItemContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "20px",
  };

  const secondaryMenuTextStyle = {
    fontSize: "20px",
    textAlign: "left",
    marginTop: "15px",
    marginBottom: "7px",
    cursor: "pointer",
    padding: "5px 0px",
  };

  const menuIconStyle = {
    fontSize: "23px",
    marginRight: "5px",
  };

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
      <Box>
        <div>
          <div style={homeMenuDiv} onClick={() => Navigate("/")}>
            <HomeIcon style={homeMenuIconStyle} />
            <Typography style={homeMenuTextStyle}>Home</Typography>
          </div>
          <div style={menuItemContainerStyle} onClick={() => Navigate("/post")}>
            <AddCircleIcon style={menuIconStyle} />
            <Typography style={secondaryMenuTextStyle}>
              Create a post
            </Typography>
          </div>
          <div style={menuItemContainerStyle}>
            <FormatListBulletedIcon style={menuIconStyle} />
            <Typography style={secondaryMenuTextStyle}>My posts</Typography>
          </div>
          <div
            style={menuItemContainerStyle}
            onClick={() => Navigate("/about")}
          >
            <InfoIcon style={menuIconStyle} />
            <Typography style={secondaryMenuTextStyle}>About</Typography>
          </div>
          <div
            style={menuItemContainerStyle}
            onClick={() => Navigate("/contact")}
          >
            <ContactPageIcon style={menuIconStyle} />
            <Typography style={secondaryMenuTextStyle}>Contact</Typography>
          </div>
          <div>
            {user ? (
              <div style={menuItemContainerStyle}>
                <LoginIcon style={menuIconStyle} />
                <Typography
                  style={secondaryMenuTextStyle}
                  onClick={handleLogout}
                >
                  Sign out
                </Typography>
              </div>
            ) : (
              <div style={menuItemContainerStyle}>
                <LogoutIcon style={menuIconStyle} />
                <Typography
                  style={secondaryMenuTextStyle}
                  onClick={() => Navigate("/login")}
                >
                  Log In
                </Typography>
              </div>
            )}
          </div>
        </div>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "end" }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            onClick={toggleDrawer(anchor, true)}
            sx={{ fontSize: "40px", color: "white", cursor: "pointer" }}
          />

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
