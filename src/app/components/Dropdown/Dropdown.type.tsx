
export interface IDropdownItem {
    name: string;
    Icon?: React.ElementType;
    color?: string;
    value: string | number;
}

export interface DropdownProps {
    label: string;
    items: IDropdownItem[];
    selectedItems: IDropdownItem[];
    onItemSelect: (item: IDropdownItem) => void;
    onItemSelectedRemove: (item: IDropdownItem) => void;
    filterValue: string;
    onFilterChange: (newFilter: string) => void;
}

