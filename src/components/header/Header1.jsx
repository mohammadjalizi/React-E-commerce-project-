import   { useContext } from "react";
import { ColorModeContext } from "../../theme";

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";



const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div className=" bg-[#2B3445]">
      {theme.palette.mode === "light" ? (
        <IconButton 
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined  className=" text-white " />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined className=" "/ >
        </IconButton>
      )}
    </div>
  );
};

export default Header1;