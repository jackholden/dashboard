import { useParams, Link } from "react-router-dom";
import {
  Title,
  LoadingOverlay,
  Skeleton,
  Alert,
  Accordion,
  List,
  Button,
} from "@mantine/core";
import useAxios from "axios-hooks";
import { HiX } from "react-icons/hi";

import { getPaymentsCustomerDetailed } from "../../../api";

function CustomersPaymentsTab() {
  const params = useParams();
  const [{ data, loading, error }] = useAxios(
    getPaymentsCustomerDetailed(params.id)
  );

  if (loading) {
    return (
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
    );
  }
  if (error) {
    return (
      <Alert icon={<HiX size={16} />} title="Something went wrong!" color="red">
        We couldn't get what you're after :(
      </Alert>
    );
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );

  // const fakePayments = [
  //   {
  //     id: "00001",
  //     title: "payment #00001 @ 10/01/2021",
  //     status: "PAID",
  //     text: "a much more indepth payments view...",
  //   },
  //   {
  //     id: "00002",
  //     title: "payment #00002 @ 08/01/2021",
  //     status: "UNPAID",
  //     text: "a much more indepth payments view...",
  //   },
  // ];
  // return (
  //   <>
  //     <Title order={2}>Customer Payments</Title>
  //     <Accordion transitionDuration={0}>
  //       {fakePayments.map((payment) => (
  //         <Accordion.Item
  //           key={payment.id}
  //           label={`${payment.title} - ${payment.status}`}
  //         >
  //           {payment.status === "UNPAID" ? "unpaid" : "paid"}
  //           <Button component={Link} to={`/payments/${payment.id}`}>
  //             Details
  //           </Button>
  //         </Accordion.Item>
  //       ))}
  //     </Accordion>
  //   </>
  // );
}

export default CustomersPaymentsTab;
