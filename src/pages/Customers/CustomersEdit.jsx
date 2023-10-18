import { useParams } from "react-router-dom";
import {
  Title,
  Grid,
  Group,
  Paper,
  LoadingOverlay,
  Skeleton,
  Alert,
} from "@mantine/core";
import useAxios from "axios-hooks";
import { HiX } from "react-icons/hi";
import HelmetSEO from "../../components/HelmetSEO";
import Previous from "../../components/Previous";
import CustomersEditForm from "../../components/Customers/CustomersEditForm";

// import customerData from "../../customer.json";

import { getCustomersDetailed } from "../../api";

function CustomersEdit() {
  const params = useParams();
  const [{ data, loading, error }] = useAxios(getCustomersDetailed(params.id));

  return (
    <>
      <HelmetSEO title={`Editing Customer #${params.id}`} />
      <header className="page-header">
        <Grid justify="space-between">
          <Grid.Col span={10}>
            <Group>
              <Previous />
              {loading && !error ? (
                <Title order={1}>Editing Customer #{params.id}</Title>
              ) : error ? (
                <Title order={1}>Editing Customer #{params.id}</Title>
              ) : (
                <Title order={1}>Editing {data.customer_name}</Title>
              )}
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
                  <Skeleton height={40} />
                  <Skeleton height={20} mt={10} />
                  <Skeleton height={40} mt={10} />
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
                <CustomersEditForm data={data} />
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      </section>
    </>
  );
}

export default CustomersEdit;
