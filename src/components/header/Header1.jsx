import   { useContext } from "react";
import { ColorModeContext } from "../../theme";

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";



const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (

    <div className=" bg-[#2B3445] ">


   
    <div className="   md:mx-36  p-4 flex  items-center  justify-between ">


   
      <div className=" login ">

      <div className="d-flex align-items-center justify-content-center">
<a href="https://pik.coffee/my-account/" className=" text-white d-flex align-items-center">ورود  <span>/</span> ثبت نام</a></div>

      </div>
      <div className="  ">

<a  className="  m-3   text-white " href="">  صفحه ی اصلی</a>
<a  className=" text-white " href="#">فروشگاه</a>
<a  className=" text-white " href=""> بلاگ </a>
<a className="  text-white " href=""> درباره ما </a>
      </div>
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
     </div>
  );
};

export default Header1;