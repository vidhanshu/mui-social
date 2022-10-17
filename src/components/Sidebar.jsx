import styled from "@emotion/styled";
import {
  Box,
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SIDEBAR_DATA } from "../constants";

const Sidebar = ({ toggleTheme, mode }) => {
  const ModeSwitch = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    cursor: "pointer",
    gap: "0.5rem",
  });
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <Box p={2} flex={1} sx={{ display: { sm: "block", xs: "none" } }}>
      <Box position="fixed">
        <List>
          {SIDEBAR_DATA.map(({ title, icon, href }) => (
            <>
              <ListItem disablePadding>
                <ListItemButton component="a" href={`#${title}`}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            </>
          ))}
          <ListItem>
            <ModeSwitch>
              {!mode && <MdLightMode size={25} />}
              <Switch
                checked={mode}
                onChange={toggleTheme}
                {...label}
                defaultChecked
              />
              {mode && <MdDarkMode size={25} />}
            </ModeSwitch>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
