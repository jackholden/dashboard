import { Button, Badge, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import TemplateTable from "../TemplateTable";

function PaymentsTable({ data }) {
  console.log(data);
  const columns = [
    {
      Header: "Payment #",
      accessor: "id",
    },
    {
      Header: "Customer name",
      accessor: "customer.customer_name",
    },
    {
      Header: "Invoice ID",
      accessor: "invoiceId",
    },
    {
      Header: "Total",
      accessor: "grossAmount",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ row }) =>
        row.original.status === "paid" ? (
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
          <Button component={Link} to={`/invoices/${row.original.invoiceId}`}>
            View Invoice
          </Button>
          <Button component={Link} to={`/payments/${row.original.id}`}>
            View Payment
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

export default PaymentsTable;
