import { Link } from "react-router-dom";
import { Title, Grid, Group, Button, Paper } from "@mantine/core";
import HelmetSEO from "../../components/HelmetSEO";
import Previous from "../../components/Previous";
import InvoicesCreator from "../../components/Invoices/InvoicesCreator";

function InvoicesNew() {
  return (
    <>
      <HelmetSEO title="New Invoice" />
      <header className="page-header">
        <Grid justify="space-between">
          <Grid.Col span={8}>
            <Group>
              <Previous />
              <Title order={1}>New Invoice</Title>
            </Group>
          </Grid.Col>
        </Grid>
      </header>
      <section className="container-temp">
        <Grid shadow="xl">
          <Grid.Col md={12} lg={10}>
            <Paper p="md" shadow="xl">
              <InvoicesCreator />
            </Paper>
          </Grid.Col>
        </Grid>
      </section>
    </>
  );
}

export default InvoicesNew;
