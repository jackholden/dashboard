import { Grid, Group, Title } from "@mantine/core";
import HelmetSEO from "../components/HelmetSEO";
import Previous from "../components/Previous";

function PageNotFound() {
  return (
    <>
      <HelmetSEO title="Page Not Found" />
      <header className="page-header">
        <Grid justify="space-between">
          <Grid.Col span={8}>
            <Group>
              <Previous />
              <Title order={1}>Page Not Found</Title>
            </Group>
          </Grid.Col>
        </Grid>
      </header>
    </>
  );
}

export default PageNotFound;
