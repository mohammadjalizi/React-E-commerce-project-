import   { useContext } from "react";
import { ColorModeContext } from "../../theme";

import { DarkModeOutlined, LightModeOutlined, ShoppingCart } from "@mui/icons-material";
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

  <ul  className=" flex gap-4  flex-row-reverse">

<li className=" mx-6 ">
  <a className="  text-white" href="#"> صقحه اصلی </a>
</li>
<li className=" mx-6 ">
  <a className=" text-white" href="#">  فروشگاه </a>
</li><li className=" mx-6 ">
  <a className=" text-white" href="#">  بلاگ </a>
</li><li className=" mx-6 ">
  <a className=" text-white" href="#">  درباره ما </a>
</li>
  </ul>
</div>
<div className=" icons flex items-center ">
<div className=" relative ">
<span className="   absolute   left-14 rounded-3xl shadow-2xl text-white  text-w">4</span>
<ShoppingCart  className="  mx-8 cursor-pointer text-white"/>
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
     </div>
  );
};

export default Header1;