import React from "react";

import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineSearch,
  HiOutlineCollection,
  HiOutlineDocumentReport,
  HiOutlineCreditCard,
  HiOutlineUserCircle,
} from "react-icons/hi";

export const desktopNav = [
  {
    to: "/",
    icon: <HiOutlineHome />,
    name: "Dashboard",
  },
  {
    to: "/invoices",
    icon: <HiOutlineCollection />,
    name: "Invoices",
  },
  {
    to: "/customers",
    icon: <HiOutlineUsers />,
    name: "Customers",
  },
  {
    to: "/payments",
    icon: <HiOutlineCreditCard />,
    name: "Payments",
  },
  {
    to: "/reports",
    icon: <HiOutlineDocumentReport />,
    name: "Reports",
  },
  {
    to: "/search",
    icon: <HiOutlineSearch />,
    name: "Search",
  },
];

export const mobileNav = [
  {
    to: "/",
    icon: <HiOutlineHome />,
    name: "Dashboard",
  },
  {
    to: "/invoices",
    icon: <HiOutlineCollection />,
    name: "Invoices",
  },
  {
    to: "/customers",
    icon: <HiOutlineUsers />,
    name: "Customers",
  },
  {
    to: "/user/account",
    icon: <HiOutlineUserCircle />,
    name: "Account",
  },
];

const exportedNav = {
  desktopNav,
  mobileNav,
};

export default exportedNav;
