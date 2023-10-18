import { Link } from "react-router-dom";
import { Title, Grid, Group, Button, Paper } from "@mantine/core";
import HelmetSEO from "../../components/HelmetSEO";
import Previous from "../../components/Previous";
import CustomersNewForm from "../../components/Customers/CustomersNewForm";

function CustomersNew() {
  return (
    <>
      <HelmetSEO title="New Customer" />
      <header className="page-header">
        <Grid justify="space-between">
          <Grid.Col span={8}>
            <Group>
              <Previous />
              <Title order={1}>New Customer</Title>
            </Group>
          </Grid.Col>
        </Grid>
      </header>
      <section className="container-temp">
        <Grid shadow="xl">
          <Grid.Col md={12} lg={10}>
            <Paper p="md" shadow="xl">
              <CustomersNewForm />
            </Paper>
          </Grid.Col>
        </Grid>
      </section>
    </>
  );
}

export default CustomersNew;
