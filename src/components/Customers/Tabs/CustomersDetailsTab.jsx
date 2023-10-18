import { Title, Accordion, List, Button } from "@mantine/core";

function CustomersDetailsTab({ data }) {
  const customerList = [
    {
      key: "customerName",
      title: "Customer name",
      data: data.customer_name,
    },
    {
      key: "customerType",
      title: "Customer type",
      data: data.customer_type,
    },
    {
      key: "status",
      title: "Customer status",
      data: data.status,
    },
  ];
  const personalList = [
    {
      key: "firstName",
      title: "First name",
      data: data.contact.firstName,
    },
    {
      key: "lastName",
      title: "Last name",
      data: data.contact.lastName,
    },
    {
      key: "email",
      title: "Email",
      data: data.contact.email,
    },
    {
      key: "phone",
      title: "Phone",
      data: data.contact.phone,
    },
    {
      key: "age",
      title: "Age",
      data: data.contact.age,
    },
  ];

  const addressList = [
    {
      key: "buildingName",
      title: "Building Name",
      data:
        data.address.buildingName === "" ? "Unset" : data.address.buildingName,
    },
    {
      key: "town",
      title: "Town",
      data: data.address.town,
    },
    {
      key: "city",
      title: "City",
      data: data.address.city,
    },
    {
      key: "county",
      title: "County",
      data: data.address.county,
    },
    {
      key: "country",
      title: "Country",
      data: data.address.country,
    },
    {
      key: "postcode",
      title: "Postcode",
      data: data.address.postcode,
    },
    {
      key: "street1",
      title: "Street 1",
      data: data.address.street1,
    },
    {
      key: "primaryAddress",
      title: "Primary Address",
      data: data.address.primaryAddress === true ? "Yes" : "No",
    },
    {
      key: "street2",
      title: "Street 2",
      data: data.address.street2 === "" ? "Unset" : data.address.street2,
    },
  ];

  return (
    <>
      <Title order={2}>Customer Details</Title>
      <List className="list-style-none">
        {customerList.map((item) => (
          <List.Item key={item.key}>
            <b>{item.title}:</b> {item.data}
          </List.Item>
        ))}
      </List>
      <Accordion transitionDuration={0} initialItem={0} multiple>
        <Accordion.Item label="Personal">
          <List className="list-style-none">
            {personalList.map((item) => (
              <List.Item key={item.key}>
                <b>{item.title}:</b> {item.data}
              </List.Item>
            ))}
          </List>
        </Accordion.Item>
        <Accordion.Item label="Address">
          <List className="list-style-none">
            {addressList.map((item) => (
              <List.Item key={item.key}>
                <b>{item.title}:</b> {item.data}
              </List.Item>
            ))}
          </List>
        </Accordion.Item>
        <Accordion.Item label="Actions">
          <Button color="red">Delete Customer</Button>
        </Accordion.Item>
      </Accordion>
      {/* <pre>{JSON.stringify(customerData, null, 4)}</pre> */}
    </>
  );
}

export default CustomersDetailsTab;
