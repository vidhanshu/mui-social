import styled from "@emotion/styled";
import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Userbox = ({ handleOnclick, open, handleClose, responsive = true }) => {
  const UserBox = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center",
  });
  if (responsive) {
    return (
      <UserBox>
        <Avatar
          onClick={handleOnclick}
          sx={{
            width: {
              sm: "30px",
              xs: "25px",
            },
            height: {
              sm: "30px",
              xs: "25px",
            },
          }}
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
        />
        <Typography  variant="p" sx={{ display: { sm: "block", xs: "none" } }}>
          Vidhanshu
        </Typography>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={open}
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </UserBox>
    );
  } else {
    return (
      <UserBox>
        <Avatar
          onClick={handleOnclick}
          sx={{
            width: {
              sm: "30px",
              xs: "25px",
            },
            height: {
              sm: "30px",
              xs: "25px",
            },
          }}
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
        />
        <Typography color="GrayText"  variant="p">Vidhanshu</Typography>
      </UserBox>
    );
  }
};

export default Userbox;
