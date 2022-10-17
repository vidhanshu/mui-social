import {
  Tooltip,
  Fab,
  Modal,
  Typography,
  Box,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import React from "react";
import Userbox from "./Userbox";
import {
  BsImage,
  BsFillCameraVideoFill,
  BsEmojiLaughing,
} from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import styled from "@emotion/styled";

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
  };

  const OptionsGroup = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    marginTop: 10,
    marginBottom: 20,
    maxWidth: 160,
    "& > *": {
      cursor: "pointer",
      color: "#9e9e9e",
      "&:hover": {
        color: "blue",
      },
    },
  });
  return (
    <>
      <Tooltip
        sx={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          fontSize: "1.5rem",
        }}
        onClick={() => setOpen(true)}
        title="Add"
      >
        <Fab color="primary" aria-label="add">
          +
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              textAlign: "center",
              color: "primary.main",
              mb: "1rem",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create a Post
          </Typography>
          <Userbox
            handleClose={() => {}}
            handleOnclick={() => {}}
            open={false}
            responsive={false}
          />
          <TextField
            id="standard-multiline-static"
            label="What's on your mind?"
            multiline
            rows={3}
            variant="standard"
            sx={{
              width: "100%",
              mt: "1rem",
            }}
          />
          <OptionsGroup>
            <BsImage size={25} />
            <BsFillCameraVideoFill size={25} />
            <BsEmojiLaughing size={25} />
            <AiOutlineUserAdd size={25} />
          </OptionsGroup>
          <ButtonGroup variant="contained" color="primary" aria-label="post">
            <Button>Post</Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
