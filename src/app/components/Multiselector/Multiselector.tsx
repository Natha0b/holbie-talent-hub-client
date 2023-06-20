"use client";
import React, { useEffect } from 'react';
import styles from './Multiselector.module.scss'
import { MultiselectorProps } from './Multiselector.type';
import { useMultiselector } from './useMultiselector';

export const Multiselector: React.FC<MultiselectorProps> = ({
    label,
    items,
    initial = [],
    onItemSelect,
    onItemSelectedRemove,
    onFilterChange,
    onSelectedItems,
    max = 4
}) => {

    const {
        filterItems,
        selectItem,
        removeSelectedItem,
        filterValue, setFilterValue, selectedItems
    } =  useMultiselector(items, initial, max);

    
    useEffect(() => {
        if (typeof onSelectedItems === 'function') onSelectedItems(selectedItems);
    }, [selectedItems]);


    return (
        <section className={styles.multiselector}>
            <label htmlFor="">{label}</label>
            <div className={styles["selected-items"]}>
                {selectedItems.map(({ Icon, color, name, ...item }, key) => (
                    <>
                        {
                            Icon ?
                            <>
                                <Icon
                                    style={{ '--color': color } as React.CSSProperties}
                                    key={key}
                                    type="button"
                                    onClick={() => {
                                        if (typeof onItemSelectedRemove === 'function') onItemSelectedRemove({...item, Icon, color, name });
                                        removeSelectedItem({ ...item, Icon, color, name });
                                    }}
                                />
                            </>
                                :
                                <span
                                    style={{ '--color': color } as React.CSSProperties}
                                    key={key}
                                    onClick={() => {
                                        if (typeof onItemSelectedRemove === 'function') onItemSelectedRemove({ ...item, Icon, color, name });
                                        removeSelectedItem({ ...item, Icon, color, name });
                                    }}
                                >{name}</span>
                        }
                    </>
                ))}
            </div>
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
            <nav className={styles['multiselector__container-list']} >
                {
                    filterItems().map(({ Icon, color, name, ...item }, index) => (
                        <button
                            key={index}
                            type='button'
                            style={{ '--color': color } as React.CSSProperties}
                            className={styles['multiselector__icon']}
                            onClick={() => {
                                if (typeof onItemSelect === 'function') onItemSelect({ ...item, Icon, color, name });
                                selectItem({ Icon, color, name, ...item });
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
