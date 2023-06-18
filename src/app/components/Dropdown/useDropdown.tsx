import { useState, useCallback } from 'react';
import { IDropdownItem } from './Dropdown.type';

export const useDropdown = (items: IDropdownItem[]) => {
  const [filterValue, setFilterValue] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<IDropdownItem[]>([]);

  const selectItem = (item: IDropdownItem) => {
    setFilterValue('');
    setSelectedItems([...selectedItems, item]);
  };

  const removeSelectedItem = (selectedItem: IDropdownItem) => {
    setFilterValue('');
    const newSelectedItems = selectedItems.filter(item => item.value !== selectedItem.value);
    setSelectedItems(newSelectedItems);
  };

  const filterItems = useCallback(() => {
    const lowerCaseFilter = filterValue.toLowerCase().split(' ');
    return items.filter(item => 
        lowerCaseFilter.reduce((prev, value) => prev && item.name.toLowerCase().includes(value), true)
    );
  }, [filterValue, items]);

  return { filterItems, selectItem, removeSelectedItem, filterValue, setFilterValue };
};
