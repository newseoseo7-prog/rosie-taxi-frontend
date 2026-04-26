import Image from "next/image";
import React from "react";

import Logo from "@/images/logo.jpg";

const LogoSvg = () => {
  return (
    <>
     <Image priority src={Logo} width={100} height={50} alt="logo" className={'rounded-2xl'}/>
    </>
  );
};

export default LogoSvg;
