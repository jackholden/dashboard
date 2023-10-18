import { Group, Avatar, Text, Select } from "@mantine/core";
import { forwardRef } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";

const SelectItem = forwardRef(({ image, label, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <Avatar size={45}>?</Avatar>
      {/* <Avatar src={image} /> */}

      <div>
        <Text>{label}</Text>
      </div>
    </Group>
  </div>
));

export default function BusinessSwitcher({
  selectedBusiness,
  setBusiness,
  data,
}) {
  return (
    <Select
      size="md"
      icon={<HiOutlineBriefcase />}
      placeholder="Select your business"
      itemComponent={SelectItem}
      data={data}
      defaultValue={selectedBusiness}
      onChange={setBusiness}
      maxDropdownHeight={400}
      nothingFound="You don't have a business under that name"
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
