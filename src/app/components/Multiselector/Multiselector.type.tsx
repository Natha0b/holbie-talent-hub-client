
export interface IMultiselectorItem {
    name: string;
    Icon?: React.ElementType;
    color?: string;
    value: string | number;
}

export interface MultiselectorProps {
    label: string;
    items: IMultiselectorItem[];
    initial?: IMultiselectorItem[];
    onItemSelect?: (item: IMultiselectorItem) => void;
    onItemSelectedRemove?: (item: IMultiselectorItem) => void;
    onFilterChange?: (newFilter: string) => void;
    onSelectedItems?: (item: IMultiselectorItem[]) => void;
    max?: number;
}