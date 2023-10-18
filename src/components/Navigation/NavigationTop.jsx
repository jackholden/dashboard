import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ActionIcon,
  UnstyledButton,
  Button,
  Popover,
  SimpleGrid,
  Group,
  Avatar,
  Menu,
  Divider,
  Space,
  Text,
} from "@mantine/core";
import {
  HiPlus,
  HiOutlineChevronDown,
  HiOutlineMenu,
  HiOutlineViewGrid,
} from "react-icons/hi";
import BusinessSwitcher from "./BusinessSwitcher";
// import SearchInput from "./SearchInput";

const businessData = [
  {
    image: "https://img.icons8.com/office/256/000000/doughnut.png",
    label: "Jan's Donuts",
    value: "business-uniqueid1",
  },
  {
    image:
      "https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/256/external-cleaning-stay-home-vitaliy-gorbachev-blue-vitaly-gorbachev.png",
    label: "Jan's Cleaning",
    value: "business-uniqueid2",
  },
];

export default function NavigationTop({ setOpened }) {
  const [selectedBusiness, setBusiness] = useState("business-uniqueid1");
  // const [gridOpen, setGridOpened] = useState(false);
  return (
    <>
      <div className="mobile-only">
        logo
        <ActionIcon
          color="simple-invoice"
          size="xl"
          onClick={() => setOpened(true)}
        >
          <HiOutlineMenu />
        </ActionIcon>
      </div>
      <div className="desktop-only">
        {
          <BusinessSwitcher
            selectedBusiness={selectedBusiness}
            setBusiness={setBusiness}
            data={businessData}
          /> /* <SearchInput /> */
        }
      </div>
      <div className="actions-nav">
        <Menu
          placement="end"
          trigger="hover"
          gutter={10}
          shadow="xl"
          transitionDuration={0}
          control={
            <Button size="md" leftIcon={<HiPlus />}>
              New
            </Button>
          }
        >
          <Menu.Item className="f-1rem" component={Link} to="/invoices/new">
            New Invoice
          </Menu.Item>
          <Divider />
          <Menu.Item className="f-1rem" component={Link} to="/customers/new">
            New Customer
          </Menu.Item>
          <Divider />
          <Menu.Item className="f-1rem" component={Link} to="/account/new">
            New Business
          </Menu.Item>
        </Menu>
        {/* <Space w="xl" />
        <Popover
          opened={gridOpen}
          onClose={() => setGridOpened(false)}
          target={
            <Button
              size="md"
              leftIcon={<HiOutlineViewGrid />}
              onClick={() => setGridOpened((o) => !o)}
            >
              Grid
            </Button>
          }
          width={260}
          position="bottom"
          placement="end"
          withArrow
        >
          <SimpleGrid cols={3} spacing="xs">
            <div>
              <UnstyledButton onClick={() => console.log("do something...")}>
                Service
              </UnstyledButton>
            </div>
            <div>
              <UnstyledButton onClick={() => console.log("do something...")}>
                Service
              </UnstyledButton>
            </div>
            <div>
              <UnstyledButton onClick={() => console.log("do something...")}>
                Service
              </UnstyledButton>
            </div>
            <div>
              <UnstyledButton onClick={() => console.log("do something...")}>
                Service
              </UnstyledButton>
            </div>
            <div>
              <UnstyledButton onClick={() => console.log("do something...")}>
                Service
              </UnstyledButton>
            </div>
            <div>
              <UnstyledButton onClick={() => console.log("do something...")}>
                Service
              </UnstyledButton>
            </div>
          </SimpleGrid>
        </Popover> */}
        <Space w="xl" />
        <UnstyledButton onClick={() => console.log("clicked account menu")}>
          <Menu
            placement="end"
            gutter={6}
            shadow="xl"
            transitionDuration={0}
            control={
              <Group>
                <Avatar size={45} color="simp-inv">
                  JH
                </Avatar>
                <HiOutlineChevronDown />
              </Group>
            }
          >
            <Menu.Item className="f-1rem">Account</Menu.Item>
            <Menu.Item className="f-1rem">Settings</Menu.Item>
            <Divider />
            <Menu.Item className="f-1rem" color="red">
              Sign Out
            </Menu.Item>
          </Menu>
        </UnstyledButton>
      </div>
    </>
  );
}
