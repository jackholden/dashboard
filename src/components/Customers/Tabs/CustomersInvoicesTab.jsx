import { useParams } from "react-router-dom";
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

import { getInvoicesCustomerDetailed } from "../../../api";

function CustomersInvoicesTab() {
  const params = useParams();
  const [{ data, loading, error }] = useAxios(
    getInvoicesCustomerDetailed(params.id)
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
}

export default CustomersInvoicesTab;
