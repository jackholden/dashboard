import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoadingOverlay,
  Button,
  Paper,
  TextInput,
  Select,
  RadioGroup,
  Radio,
  NumberInput,
  Checkbox,
  Divider,
  Accordion,
  useAccordionState,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNotifications } from "@mantine/notifications";
import { HiOutlineCheckCircle } from "react-icons/hi";

export default function CustomersEditForm({ data }) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const notifications = useNotifications();

  console.log(data);

  const ogEmail = data.contact.email;

  const form = useForm({
    initialValues: {
      customerName: data.customer_name,
      customerType: data.customer_type,
      status: data.status,
      firstName: data.contact.firstName,
      lastName: data.contact.lastName,
      email: data.contact.email,
      phone: data.contact.phone,
      age: data.contact.age,
      buildingName: data.address.buildingName,
      town: data.address.town,
      city: data.address.city,
      county: data.address.county,
      country: data.address.country,
      postcode: data.address.postcode,
      street1: data.address.street1,
      primaryAddress: data.address.primaryAddress,
      street2: data.address.street2,
    },
    validationRules: {
      customerName: (value) => value.trim().length >= 2,
      customerType: (value) => value.trim().length >= 2,
      firstName: (value) => value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      phone: (value) =>
        /^(?:(?:00)?44|0)7(?:[45789]\d{2}|624)\d{6}$/.test(value),
    },
    errorMessages: {
      customerName: "Invalid customer name",
      customerType: "Invalid customer type",
      firstName: "Invalid customer first name",
      phone: "Invalid customer phone",
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (values.email !== ogEmail) {
        // if email changed
        // do server check
        setServerError("You already have a customer with this email");
        form.setFieldError("email", true);
      } else {
        notifications.showNotification({
          title: "Customer updated!",
          color: "simp-inv",
          icon: <HiOutlineCheckCircle />,
          autoClose: 5000,
        });
        navigate("/customers");
      }
    }, 1500);
  };

  return (
    <>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        style={{ position: "relative" }}
      >
        <LoadingOverlay visible={loading} />
        <Paper p="sm">
          <TextInput
            data-autofocus
            size="md"
            placeholder="Customer Name"
            label="Customer Name"
            {...form.getInputProps("customerName")}
          />
        </Paper>
        <Paper p="sm">
          <Select
            label="Customer Type"
            size="md"
            placeholder="Select customer type"
            searchable
            nothingFound="Nothing found"
            data={[
              { value: "Automotive", label: "Automotive" },
              { value: "ThinkTanks", label: "ThinkTanks" },
              { value: "Retail", label: "Retail" },
              { value: "Nanotechnology", label: "Nanotechnology" },
              { value: "other", label: "This will be an async request" },
            ]}
            {...form.getInputProps("customerType")}
          />
        </Paper>
        <Paper p="sm">
          <RadioGroup label="Customer Status" {...form.getInputProps("status")}>
            <Radio value="active" label="Active" />
            <Radio value="inactive" label="Inactive" />
          </RadioGroup>
        </Paper>
        <Divider />
        <Paper p="sm">
          <TextInput
            size="md"
            label="First Name"
            placeholder="Jane"
            {...form.getInputProps("firstName")}
          />
        </Paper>
        <Paper p="sm">
          <TextInput
            size="md"
            label="Last Name"
            placeholder="Doe"
            {...form.getInputProps("lastName")}
          />
        </Paper>
        <Paper p="sm">
          <TextInput
            label="Customer Email"
            size="md"
            placeholder="name@mandant.net"
            error={
              form.errors.email && (serverError || "Invalid customer email")
            }
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            onFocus={() => {
              setServerError(null);
              form.setFieldError("email", false);
            }}
          />
        </Paper>
        <Paper p="sm">
          <TextInput
            label="Phone"
            size="md"
            placeholder="07000 000 000"
            {...form.getInputProps("phone")}
          />
        </Paper>
        <Paper p="sm">
          <NumberInput
            placeholder="Age"
            label="Age"
            size="md"
            {...form.getInputProps("age")}
          />
        </Paper>
        <Divider />
        <Paper p="sm">
          <TextInput
            label="Building Name"
            placeholder=""
            size="md"
            {...form.getInputProps("buildingName")}
          />
        </Paper>
        <Paper p="sm">
          <TextInput
            label="Town"
            size="md"
            placeholder="Willows Hollow - 9"
            {...form.getInputProps("town")}
          />
        </Paper>
        <Paper p="sm">
          <Select
            label="Country"
            placeholder="Select country"
            searchable
            size="md"
            data={[]}
            {...form.getInputProps("country")}
          />
        </Paper>
        <Paper p="sm">
          <Select
            label="County"
            placeholder="Select county"
            searchable
            size="md"
            data={[]}
            {...form.getInputProps("county")}
          />
        </Paper>
        <Paper p="sm">
          <Select
            label="City"
            placeholder="Select city"
            searchable
            size="md"
            data={[]}
            {...form.getInputProps("city")}
          />
        </Paper>
        <Paper p="sm">
          <Checkbox
            mt="md"
            label="Use as primary address?"
            {...form.getInputProps("primaryAddress", { type: "checkbox" })}
          />
        </Paper>
        <Paper p="sm">
          <Button size="md" type="submit">
            Create
          </Button>
        </Paper>
      </form>
    </>
  );
}
