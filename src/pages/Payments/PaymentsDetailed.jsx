import { useState } from "react";
import { useParams } from "react-router-dom";
import { Title, Grid, Group, Badge, Paper } from "@mantine/core";
import HelmetSEO from "../../components/HelmetSEO";
import Previous from "../../components/Previous";

function PaymentsDetailed() {
  const params = useParams();

  return (
    <>
      <HelmetSEO title={`Payment #${params.id}`} />
      <header className="page-header">
        <Grid justify="space-between">
          <Grid.Col span={8}>
            <Group>
              <Previous route="/payments" />
              <Title order={1}>Payment #{params.id}</Title>
              <Badge variant="filled" color="red" size="xl">
                Unpaid
              </Badge>
            </Group>
          </Grid.Col>
        </Grid>
      </header>
      <section className="container-temp">
        <Grid shadow="xl">
          <Grid.Col md={12} lg={10}>
            <Paper p="md" shadow="xl"></Paper>
          </Grid.Col>
        </Grid>
      </section>
    </>
  );
}

export default PaymentsDetailed;
