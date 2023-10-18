import { useNavigate } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import { HiOutlineArrowLeft } from "react-icons/hi";

function Previous({ route }) {
  const navigate = useNavigate();
  return (
    <>
      <ActionIcon
        className="prevBtn"
        size="xl"
        color="simp-inv"
        variant="hover"
        onClick={() => (!route ? navigate(-1) : navigate(route))}
      >
        <HiOutlineArrowLeft />
      </ActionIcon>
    </>
  );
}

Previous.defaultProps = {
  route: null,
};

export default Previous;
