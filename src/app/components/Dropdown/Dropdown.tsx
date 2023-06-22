"use client";
import React, { useRef } from 'react';
import styles from './Dropdown.module.scss'
import { DropdownProps } from './Dropdown.type';
import { useDropdown } from './useDropdown';

export const Dropdown: React.FC<DropdownProps> = ({
    label,
    items,
    initial = {
        value: "",
        name: "",
    },
    onItemSelect,
    onFilterChange,
    max = 4
}) => {

    const {
        filterItems,
        selectItem,
        filterValue,
        setFilterValue
    } = useDropdown(items, initial, max);

    const id = useRef(Math.random().toString(16).slice(2)).current;

    return (
        <section className={styles.dropdown}>
            <input
                type="text"
                name=""
                id={id}
                value={filterValue}
                onChange={(e) => {
                    if (typeof onFilterChange === 'function') onFilterChange(e.target.value);
                    setFilterValue(e.target.value);
                }}
            />
            <label htmlFor={id} className={`${filterValue?.length > 0 ? styles['label--active'] : ''}`}>{label}</label>
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
