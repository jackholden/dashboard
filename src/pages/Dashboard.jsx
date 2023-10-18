import { List, Title } from "@mantine/core";
import HelmetSEO from "../components/HelmetSEO";

function Dashboard() {
  return (
    <>
      <HelmetSEO title="Dashboard" />
      <header className="page-header">
        <Title order={1}>Dashboard</Title>
      </header>
      <Title>Todo</Title>
      <List>
        <List.Item>
          Invoice creator page
          <List withPadding listStyleType="disc">
            <List.Item>Get basics working - done</List.Item>
            <List.Item>Do row subtotals with discounts - done</List.Item>
            <List.Item>Do VAT/tax for total</List.Item>
            <List.Item>Invoice preview mode</List.Item>
            <List.Item>
              Dynamic select modal to search through all your customers
            </List.Item>
          </List>
        </List.Item>
        <List.Item>Remove useForm hook unsupported now (3/3) - done</List.Item>
        <List.Item>Update packages to latest version - done</List.Item>
        <List.Item>Implement zod schema validation on forms</List.Item>
        <List.Item>Make sidebar fixed and always in view</List.Item>
        <List.Item>Fix responsiveness</List.Item>
        <List.Item>
          Customer pages dynamic selects
          <List withPadding listStyleType="disc">
            <List.Item>
              Figure out how to work the countries, cities selects
            </List.Item>
            <List.Item>...</List.Item>
          </List>
        </List.Item>
      </List>
    </>
  );
}

export default Dashboard;
