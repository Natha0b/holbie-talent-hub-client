"use client";
import React from 'react';
import styles from './Dropdown.module.scss'
import { DropdownProps } from './Dropdown.type';
import { useDropdown } from './useDropdown';

export const Dropdown: React.FC<DropdownProps> = ({
    label,
    items,
    onItemSelect,
    onItemSelectedRemove,
    onFilterChange,
    max = 4
}) => {

    const {filterItems, selectItem, removeSelectedItem, filterValue, setFilterValue, selectedItems } =  useDropdown(items, max);

    return (
        <section className={styles.dropdown}>
            <label htmlFor="">{label}</label>
            <input
                type="text"
                name=""
                id=""
                value={filterValue}
                onChange={(e) => {
                    if (typeof onFilterChange === 'function') onFilterChange(e.target.value);
                    setFilterValue(e.target.value);
                }}
            />
            <nav className={styles['dropdown__container-list']} >
                {
                    filterItems().map(({ Icon, color, name, ...item }, index) => (
                        <button
                            key={index}
                            type='button'
                            style={{ '--color': color } as React.CSSProperties}
                            className={styles['dropdown__icon']}
                            onClick={() => {
                                if (typeof onItemSelect === 'function') onItemSelect({ ...item, Icon, color, name });
                                selectItem({ ...item, Icon, color, name });
                            }}
                        >
                            <span>{name}</span>
                            {Icon && <Icon />}
                        </button>
                    ))
                }
            </nav>
        </section>
    );
};
