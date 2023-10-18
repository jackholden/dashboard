import { useParams } from "react-router-dom";
import {
  Title,
  Grid,
  Group,
  Badge,
  Paper,
  LoadingOverlay,
  Skeleton,
  Alert,
} from "@mantine/core";
import useAxios from "axios-hooks";
import { HiX } from "react-icons/hi";
import HelmetSEO from "../../components/HelmetSEO";
import Previous from "../../components/Previous";

import { getInvoicesDetailed } from "../../api";

function InvoicesDetailed() {
  const params = useParams();
  const [{ data, loading, error }] = useAxios(getInvoicesDetailed(params.id));

  return (
    <>
      <HelmetSEO title={`Invoice #${params.id}`} />
      <header className="page-header">
        <Grid justify="space-between">
          <Grid.Col span={8}>
            <Group>
              <Previous route="/invoices" />
              <Title order={1}>Invoice #{params.id}</Title>
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
            <Paper p="md" shadow="xl">
              {loading && !error ? (
                <div style={{ position: "relative" }}>
                  <LoadingOverlay visible={loading} overlayOpacity="0.5" />
                  <Skeleton height={100} circle mt={10} mb="xl" />
                  <Skeleton height={60} />
                  <Skeleton height={20} mt={10} />
                  <Skeleton height={40} mt={10} />
                  <Skeleton height={20} mt={10} />
                  <Skeleton height={40} mt={10} />
                  <Skeleton height={20} mt={10} />
                </div>
              ) : error ? (
                <>
                  <Alert
                    icon={<HiX size={16} />}
                    title="Something went wrong!"
                    color="red"
                  >
                    We couldn't get what you're after :(
                  </Alert>
                </>
              ) : (
                <pre>{JSON.stringify(data, null, 4)}</pre>
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      </section>
    </>
  );
}

export default InvoicesDetailed;
