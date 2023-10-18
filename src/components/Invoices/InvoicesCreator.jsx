import React, { useState, useEffect } from "react";
import {
  TextInput,
  NumberInput,
  Textarea,
  Switch,
  Select,
  Group,
  ActionIcon,
  Box,
  Text,
  Button,
  Code,
  Divider,
  Table,
  SimpleGrid,
  List,
  Title,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm, formList } from "@mantine/form";
import { HiOutlineTrash } from "react-icons/hi";

function InvoicesCreator() {
  const [invoiceTotal, setInvoiceTotal] = useState(0);
  const form = useForm({
    initialValues: {
      invoiceItems: formList([
        {
          name: "",
          quantity: "",
          price: "",
          discount: "",
          discount_type: false,
          amount: "",
        },
        {
          name: "",
          quantity: "",
          price: "",
          discount: "",
          discount_type: true,
          amount: "",
        },
      ]),
      invoiceNumber: "",
      headerText: "",
      createdDate: "",
      lastUpdatedDate: "",
      dueDate: "",
      notes: "",
    },
  });

  useEffect(() => {
    const totalUpdate = () => {
      //take vat into account eventually
      const total = form.values.invoiceItems.reduce(
        (acc, transaction) => acc + Number(transaction.amount),
        0
      );
      setInvoiceTotal(total);
    };
    totalUpdate();
  }, [form.values]);

  const rowTotalUpdate = (index) => {
    let item = form.values.invoiceItems[index];
    if (
      item.quantity !== undefined &&
      item.price !== undefined &&
      item.discount !== undefined &&
      item.discount_type !== undefined
    ) {
      switch (item.discount_type) {
        case true: // percent
          item.amount =
            item.quantity * item.price -
            (item.quantity * item.price * item.discount) / 100;
          break;
        default:
          item.amount = item.quantity * item.price - item.discount;
      }
      console.log(item.amount);
    }
  };

  const fields = form.values.invoiceItems.map((_, index) => (
    <tr key={index}>
      <td style={{ width: "35%" }}>
        <TextInput
          placeholder="E.g. 1kg flour for donuts"
          required
          {...form.getListInputProps("invoiceItems", index, "name")}
        />
      </td>
      <td>
        <NumberInput
          placeholder="Quantity"
          defaultValue={0}
          required
          hideControls
          onChange={rowTotalUpdate(index)}
          {...form.getListInputProps("invoiceItems", index, "quantity")}
        />
      </td>
      <td>
        <NumberInput
          placeholder="Price"
          defaultValue={0.0}
          required
          hideControls
          {...form.getListInputProps("invoiceItems", index, "price")}
        />
      </td>
      <td>
        <Switch
          label="Percent?"
          {...form.getListInputProps("invoiceItems", index, "discount_type")}
        />
        <NumberInput
          placeholder="Discount"
          defaultValue={0.0}
          required
          hideControls
          {...form.getListInputProps("invoiceItems", index, "discount")}
        />
      </td>
      <td>
        <TextInput
          placeholder="0.00"
          variant="unstyled"
          {...form.getListInputProps("invoiceItems", index, "amount")}
        />
      </td>
      <td>
        <ActionIcon
          color="red"
          variant="hover"
          onClick={() => form.removeListItem("invoiceItems", index)}
        >
          <HiOutlineTrash />
        </ActionIcon>
      </td>
    </tr>
  ));

  const ths = (
    <tr>
      <th>Description</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Discount (%)</th>
      <th>Amount</th>
      <th>Actions</th>
    </tr>
  );

  return (
    <Box mx="auto">
      <SimpleGrid cols={2}>
        <div>
          <Select
            label="Select customer"
            placeholder="Select invoice recipient"
            searchable
            size="md"
            nothingFound="No options"
            data={["Susan James", "John Doe", "Margaret Lake", "Pete Jones"]}
          />
        </div>
        <div>
          <List>
            <List.Item>
              dropdown for if invoice/quotation etc... position tbd
            </List.Item>
            <List.Item>
              Invoice #:
              <TextInput
                placeholder="Invoice number: #00000000"
                variant="unstyled"
                size="md"
                required
              />
            </List.Item>
            <List.Item>current date</List.Item>
            <List.Item>
              date modal to select due date:
              <DatePicker
                dropdownType="modal"
                placeholder="Pick date"
                label="Event date"
                inputFormat="DD/MM/YYYY"
                {...form.getInputProps("dueDate")}
              />
            </List.Item>
          </List>
        </div>
      </SimpleGrid>
      <Table highlightOnHover>
        {fields.length > 0 ? (
          <>
            <thead>{ths}</thead>
            <tbody>{fields}</tbody>
          </>
        ) : (
          <tbody>
            <tr>
              <td colSpan="100%">
                <Text color="dimmed" align="center">
                  No invoice items...
                </Text>
              </td>
            </tr>
          </tbody>
        )}
      </Table>

      <Group position="left" mt="md">
        <Button
          onClick={() =>
            form.addListItem("invoiceItems", {
              name: "",
              quantity: "",
              price: "",
              discount: "",
              discount_type: false,
              amount: 0,
            })
          }
        >
          Add Invoice Item
        </Button>

        <Title order={2}>
          Total:
          {invoiceTotal}
        </Title>
      </Group>

      <Divider my="md" />

      <Group grow mt="md">
        <Textarea
          label="Additional Invoice Information/Notes"
          placeholder="e.g. Payment might be delayed by 2 days due to banking error"
          autosize
          minRows={5}
          maxRows={5}
          {...form.getInputProps("notes")}
        />
      </Group>

      <Group mt="md">
        <Button size="lg">Generate Invoice</Button>
      </Group>

      <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}

export default InvoicesCreator;
