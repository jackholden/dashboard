import { NavLink, Link } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import { desktopNav } from "./data/NavigationTree";

export default function NavigationSide({ expanded, setExpanded }) {
  const pages = desktopNav;

  return (
    <>
      <div className="app-logo">
        <Link to="/">SI</Link>
      </div>
      <nav>
        {pages.map((page) => (
          <NavLink
            key={page.to}
            className={({ isActive }) => (isActive ? "bold-active" : "")}
            to={page.to}
          >
            {page.icon} <span className="sidenav-name">{page.name}</span>{" "}
            <span className="sidenav-tooltip">{page.name}</span>
          </NavLink>
        ))}
      </nav>
      <ActionIcon
        size="xl"
        variant="hover"
        onClick={() => setExpanded((o) => !o)}
      >
        {expanded ? <HiOutlineChevronLeft /> : <HiOutlineChevronRight />}
      </ActionIcon>
    </>
  );
}
