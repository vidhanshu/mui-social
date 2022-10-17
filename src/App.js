import { Divider, Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Sidebar, Feed, Rightbar, Navbar, Add } from "./components";
function App() {
  const [mode, setMode] = useState(false);
  const divider = <Divider orientation="vertical" flexItem />;
  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color="text.primary" sx={{ position: "relative" }}>
        <Navbar />
        <Stack
          direction={{ sm: "row", xs: "column" }}
          spacing={{ sm: 3, xs: 2 }}
          divider={divider}
        >
          <Add />
          <Sidebar mode={mode} toggleTheme={() => setMode((e) => !e)} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
