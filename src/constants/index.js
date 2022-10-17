import { AiFillHome } from "react-icons/ai";
import { MdAddBusiness, MdBook, MdPages, MdPhone, MdPublishedWithChanges, MdShop, MdVerifiedUser } from "react-icons/md";

export const SIDEBAR_DATA = [
  {
    title: "Homepage",
    icon: <AiFillHome size={25} />,
    href: "#home",
  },
  {
    title: "Pages",
    icon: <MdPages size={25} />,
    href: "#pages",
  },
  {
    title: "About",
    icon: <MdAddBusiness size={25} />,
    href: "#about",
  },
  {
    title: "Contact",
    icon: <MdPhone size={25} />,
    href: "#contact",
  },
  {
    title: "Blog",
    icon: <MdBook size={25} />,
    href: "#blog",
  },
  {
    title: "Portfolio",
    icon: <MdVerifiedUser size={25} />,
    href: "#portfolio",
  },
  {
    title: "Shop",
    icon: <MdShop size={25} />,
    href: "#shop",
  },
  {
    title: "Elements",
    icon: <MdPublishedWithChanges size={25} />,
    href: "#elements",
  },
];
