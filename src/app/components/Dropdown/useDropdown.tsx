import { useState, useCallback } from 'react';
import { IDropdownItem } from './Dropdown.type';

export const useDropdown = (items: IDropdownItem[], initial: IDropdownItem, max = 4) => {
  const [filterValue, setFilterValue] = useState<string>(initial.name);
  const [selectedItem, setSelectedItem] = useState<IDropdownItem>(initial);

  const selectItem = (item: IDropdownItem) => {
    setFilterValue(item.name);
    setSelectedItem(item);
  };

  const removeSelectedItem = (item: IDropdownItem) => {
    setFilterValue(initial.name);
    setSelectedItem(initial);
  };

  const filterItems = useCallback(() => {
    const lowerCaseFilter = filterValue.toLowerCase().split(' ');
    return items.filter(item => 
        lowerCaseFilter.reduce((prev, value) => prev && item.name.toLowerCase().includes(value), true)
    ).splice(0, max);
  }, [filterValue, items]);

  return { filterItems, selectItem, removeSelectedItem, filterValue, setFilterValue, selectedItem };
};
