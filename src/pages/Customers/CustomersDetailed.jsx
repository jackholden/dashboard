import { useState } from "react";
import { useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  Title,
  Grid,
  Group,
  Badge,
  Paper,
  Tabs,
  LoadingOverlay,
  Skeleton,
  Alert,
} from "@mantine/core";
import useAxios from "axios-hooks";
import { HiX } from "react-icons/hi";
import HelmetSEO from "../../components/HelmetSEO";
import Previous from "../../components/Previous";
import CustomersDetailsTab from "../../components/Customers/Tabs/CustomersDetailsTab";

import { getCustomersDetailed } from "../../api";

function CustomersDetailed() {
  const params = useParams();

  const [{ data, loading, error }] = useAxios(getCustomersDetailed(params.id));

  // if (!loading && !error) {
  //   console.log(data);
  //   let editedData = data;
  //   editedData.status = "inactive"; //fake manipulation
  // }

  const { pathname } = useLocation();
  const last = pathname.split("/").reverse()[0];

  const tabs = ["", "invoices", "payments"];

  const [activeTab, setActiveTab] = useState(tabs.indexOf(last));
  const navigate = useNavigate();
  const onChange = (active, tabKey) => {
    if (tabKey === "") {
      navigate(`/customers/${params.id}`);
    } else {
      navigate(`/customers/${params.id}/${tabKey}`);
    }
    setActiveTab(active);
    console.log("tabKey", tabKey);
  };

  return (
    <>
      <HelmetSEO title={`Customer #${params.id}`} />
      <header className="page-header">
        <Grid justify="space-between">
          <Grid.Col span={10}>
            <Group>
              <Previous route="/customers" />
              {loading && !error ? (
                <Title order={1}>Customer #{params.id}</Title>
              ) : error ? (
                <Title order={1}>Customer #{params.id}</Title>
              ) : (
                <>
                  <Title order={1}>{data.customer_name}</Title>
                  <Badge
                    variant="filled"
                    color={data.status === "active" ? "" : "red"}
                    size="xl"
                  >
                    {data.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </>
              )}
            </Group>
          </Grid.Col>
        </Grid>
      </header>
      <section className="container-temp">
        <Grid shadow="xl">
          <Grid.Col md={12} lg={10}>
            <Paper p="md" shadow="xl">
              <Tabs active={activeTab} onTabChange={onChange}>
                <Tabs.Tab label="Details" tabKey="">
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
                    <CustomersDetailsTab data={data} />
                  )}
                </Tabs.Tab>
                <Tabs.Tab label="Invoices" tabKey="invoices">
                  <Outlet />
                </Tabs.Tab>
                <Tabs.Tab label="Payments" tabKey="payments">
                  <Outlet />
                </Tabs.Tab>
              </Tabs>
            </Paper>
          </Grid.Col>
        </Grid>
      </section>
    </>
  );
}

export default CustomersDetailed;
