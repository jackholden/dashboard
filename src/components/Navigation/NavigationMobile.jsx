import { NavLink } from "react-router-dom";
import { Drawer } from "@mantine/core";
import { mobileNav } from "./data/NavigationTree";

export default function NavigationMobile({ opened, setOpened }) {
  const pages = mobileNav;
  return (
    <>
      <Drawer
        classNames={{
          drawer: "simpinv-dark-bg",
        }}
        opened={opened}
        onClose={() => setOpened(false)}
        p="xl"
      >
        <nav>
          {pages.map((page) => (
            <NavLink
              key={page.to}
              className={({ isActive }) => (isActive ? "bold-active" : "")}
              to={page.to}
              onClick={() => setOpened(false)}
            >
              {page.icon} <span>{page.name}</span>
            </NavLink>
          ))}
        </nav>
      </Drawer>
    </>
  );
}
