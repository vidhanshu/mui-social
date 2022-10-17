import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { AiFillApple } from "react-icons/ai";
import React from "react";
import { AiFillMail, AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@mui/material";
import Userbox from "./Userbox";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOnclick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const Icons = styled(Box)({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  });

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { sm: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <AiFillApple size={30} />
          Apple
        </Typography>
        <Typography
          variant="h4"
          sx={{
            display: { sm: "none", xs: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AiFillApple />
        </Typography>
          <InputBase sx={{
            backgroundColor:"background.paper",
            width:"40%",
            padding: "0px 10px",
            borderRadius: "3px",
          }} placeholder="Search..." />
        <Icons>
          <Badge badgeContent={3} color="error">
            <Typography
              variant="h6"
              sx={{
                display: { sm: "none", xs: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiFillMail />
            </Typography>
            <Typography
              variant="h4"
              sx={{
                display: { sm: "flex", xs: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiFillMail />
            </Typography>
          </Badge>
          <Badge badgeContent={3} color="error">
            <Typography
              variant="h6"
              sx={{
                display: { sm: "none", xs: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiOutlineShoppingCart />
            </Typography>
            <Typography
              variant="h4"
              sx={{
                display: { sm: "flex", xs: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiOutlineShoppingCart />
            </Typography>
          </Badge>
          <Userbox
            open={open}
            handleOnclick={handleOnclick}
            handleClose={handleClose}
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
