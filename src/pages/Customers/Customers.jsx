import { Link } from "react-router-dom";
import {
  Title,
  Grid,
  Button,
  Paper,
  LoadingOverlay,
  Skeleton,
  Alert,
} from "@mantine/core";
import useAxios from "axios-hooks";
import { HiPlus, HiOutlineRefresh, HiX } from "react-icons/hi";
import HelmetSEO from "../../components/HelmetSEO";
import CustomersTable from "../../components/Customers/CustomersTable";

// import customerData from "../../customers.json";
// const data = customerData;

import { getCustomers } from "../../api";

function Customers() {
  const [{ data, loading, error }, refetch] = useAxios(getCustomers());

  return (
    <>
      <HelmetSEO title="Customers" />
      <header className="page-header">
        <Grid justify="space-between">
          <Grid.Col span={8}>
            <Title order={1}>Customers</Title>
          </Grid.Col>
          <Grid.Col
            span={4}
            style={{
              display: "inline-flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              variant="outline"
              size="lg"
              leftIcon={<HiPlus />}
              component={Link}
              to="/customers/new"
            >
              New
            </Button>
          </Grid.Col>
        </Grid>
      </header>
      <section className="container-temp">
        <Grid>
          <Grid.Col span={12}>
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
                  <Button
                    color="red"
                    radius="xl"
                    leftIcon={<HiOutlineRefresh />}
                    onClick={refetch}
                    mt={6}
                  >
                    Retry
                  </Button>
                </>
              ) : (
                <CustomersTable data={data} />
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      </section>
    </>
  );
}

export default Customers;
