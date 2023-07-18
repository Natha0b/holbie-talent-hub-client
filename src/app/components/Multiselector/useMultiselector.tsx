import { useState, useCallback } from 'react';
import { IMultiselectorItem } from './Multiselector.type';

export const useMultiselector = (items: IMultiselectorItem[], initial: IMultiselectorItem[], max = 4) => {
    const [filterValue, setFilterValue] = useState<string>('');
    const [selectedItems, setSelectedItems] = useState<IMultiselectorItem[]>(initial);

    const selectItem = (item: IMultiselectorItem) => {
        setFilterValue('');
        setSelectedItems([...selectedItems, item].filter((item, index, self) => self.findIndex(i => i.value === item.value) === index));
    };

    const removeSelectedItem = (selectedItem: IMultiselectorItem) => {
        setFilterValue('');
        const newSelectedItems = selectedItems.filter(item => item.value !== selectedItem.value);
        setSelectedItems(newSelectedItems);
    };

    const filterItems = useCallback(() => {
        const lowerCaseFilter = filterValue.toLowerCase().split(' ');
        return items.filter(item =>
            lowerCaseFilter.reduce((prev, value) => prev && item.name.toLowerCase().includes(value), true)
        ).splice(0, max);
    }, [filterValue, items]);

    return { filterItems, selectItem, removeSelectedItem, filterValue, setFilterValue, selectedItems };
};
