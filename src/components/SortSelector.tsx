import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder:(sortOrder:string)=>void;
    selectedSortOrder:string;
}
const SortSelector = ({selectedSortOrder,onSelectSortOrder}:Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
 const currentSortOrder = sortOrder.find(order=>order.value===selectedSortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label ||'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((item) => (
          <MenuItem onClick={()=>onSelectSortOrder(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
