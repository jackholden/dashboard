import { Button, Badge, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import TemplateTable from "../TemplateTable";

function InvoicesTable({ data }) {
  const columns = [
    {
      Header: "Invoice #",
      accessor: "invoiceNumber",
    },
    {
      Header: "Customer name",
      accessor: "customer.customer_name",
    },
    {
      Header: "Header text",
      accessor: "headerText",
    },
    {
      Header: "Date created",
      accessor: "createdDate",
    },
    {
      Header: "Document date",
      accessor: "documentDate",
    },
    {
      Header: "Last updated",
      accessor: "lastUpdatedDate",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ row }) =>
        row.original.status === "active" ? (
          <Badge variant="dot">Paid</Badge>
        ) : (
          <Badge variant="dot" color="red">
            Unpaid
          </Badge>
        ),
    },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <Group>
          <Button component={Link} to={`/invoices/${row.original.id}`}>
            View
          </Button>
        </Group>
      ),
    },
  ];

  return (
    <>
      <TemplateTable columns={columns} data={data} />
    </>
  );
}

export default InvoicesTable;
