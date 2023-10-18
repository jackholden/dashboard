import { Link } from "react-router-dom";
import { Title, Grid, Button, Paper } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import { HiPlus } from "react-icons/hi";
import HelmetSEO from "../../components/HelmetSEO";

function Reports() {
  return (
    <>
      <HelmetSEO title="Reports" />
      <header className="page-header">
        <Grid justify="space-between">
          <Grid.Col span={8}>
            <Title order={1}>Reports</Title>
          </Grid.Col>
        </Grid>
      </header>
      <section className="container-temp">
        <Grid>
          <Grid.Col span={12}>
            <Paper p="md" shadow="xl">
              <DateRangePicker
                dropdownType="modal"
                amountOfMonths={2}
                label="Select report range"
                fullWidth="true"
              />
              <Button>Generate Report for defined dates</Button>
              <Button>Generate this Tax year</Button>
              <Button>Export CSV</Button>
              <Button>Export PDF</Button>
            </Paper>
          </Grid.Col>
        </Grid>
      </section>
    </>
  );
}

export default Reports;
