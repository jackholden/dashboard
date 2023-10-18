import { useState } from "react";
import { Button, Badge, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import TemplateTable from "../TemplateTable";

function CustomersTable({ data }) {
  const [qvopened, setQVopened] = useState(false);
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "customer_name",
    },
    {
      Header: "Type",
      accessor: "customer_type",
      Cell: ({ row }) => (
        <Badge variant="filled" color="dark">
          {row.original.customer_type}
        </Badge>
      ),
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ row }) =>
        row.original.status === "active" ? (
          <Badge variant="dot">Active</Badge>
        ) : (
          <Badge variant="dot" color="red">
            Inactive
          </Badge>
        ),
    },
    {
      Header: "Contact First",
      accessor: "contact.firstName",
    },
    {
      Header: "Contact Last",
      accessor: "contact.lastName",
    },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <Group>
          {/* <Button
            onClick={() => {
              setQVopened(true);
              console.log(row.original.id);
            }}
            variant="outline"
          >
            Quick View
          </Button> */}
          <Button component={Link} to={`/customers/${row.original.id}`}>
            View
          </Button>
          <Button
            variant="outline"
            component={Link}
            to={`/customers/edit/${row.original.id}`}
          >
            Edit
          </Button>
        </Group>
      ),
    },
  ];

  return (
    <>
      <TemplateTable columns={columns} data={data} />
      {/* <CustomersQuickView qvopened={qvopened} setQVopened={setQVopened} /> */}
    </>
  );
}

export default CustomersTable;
