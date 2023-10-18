import { NavLink } from "react-router-dom";
import { Drawer } from "@mantine/core";

export default function CustomersQuickView({ qvopened, setQVopened }) {
  return (
    <>
      <Drawer
        classNames={{
          drawer: "simpinv-dark-bg",
        }}
        opened={qvopened}
        onClose={() => setQVopened(false)}
        p="xl"
        position="right"
        size="25%"
      >
        quick view data json
      </Drawer>
    </>
  );
}
