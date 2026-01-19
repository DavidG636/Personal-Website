"use client";

import { usePathname } from "next/navigation";
import NavbarParagraphUtilities from "./NavbarParagraphUtilities/NavbarParagraphUtilities";
import Navbar from "./Navbar/Navbar";

const NavbarContainer = () => {
  const pathName = usePathname();

  const isParagraphUtilitiesPath = pathName.startsWith("/ParagraphUtilities");

  if (isParagraphUtilitiesPath) {
    return <NavbarParagraphUtilities />;
  } else {
    return <Navbar />;
  }
};

export default NavbarContainer;
