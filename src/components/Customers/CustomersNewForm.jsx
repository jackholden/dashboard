import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoadingOverlay,
  Button,
  Paper,
  SimpleGrid,
  TextInput,
  Select,
  RadioGroup,
  Radio,
  NumberInput,
  Checkbox,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNotifications } from "@mantine/notifications";
import { HiOutlineCheckCircle } from "react-icons/hi";

export default function CustomersNewForm() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const notifications = useNotifications();

  const form = useForm({
    initialValues: {
      customerName: "",
      customerType: "",
      status: "inactive",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      buildingName: "",
      town: "",
      city: "",
      county: "",
      country: "",
      postcode: "",
      street1: "",
      primaryAddress: true,
      street2: "",
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
      if (values.email === "test@mantine.dev") {
        setServerError("You already have a customer with this email");
        form.setFieldError("email", true);
      } else {
        notifications.showNotification({
          title: "Customer created!",
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
        <SimpleGrid
          breakpoints={[
            { minWidth: "sm", cols: 1 },
            { minWidth: 1020, cols: 2 },
          ]}
        >
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
                { value: "automotive", label: "Automotive" },
                { value: "thinktanks", label: "ThinkTanks" },
                { value: "retail", label: "Retail" },
                { value: "other", label: "This will be an async request" },
              ]}
              {...form.getInputProps("customerType")}
            />
          </Paper>
        </SimpleGrid>
        <Paper p="sm">
          <RadioGroup
            size="md"
            label="Customer Status"
            {...form.getInputProps("status")}
          >
            <Radio value="active" label="Active" />
            <Radio value="inactive" label="Inactive" />
          </RadioGroup>
        </Paper>
        <Divider />
        <SimpleGrid
          breakpoints={[
            { minWidth: "sm", cols: 1 },
            { minWidth: 1020, cols: 2 },
          ]}
        >
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
        </SimpleGrid>
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
