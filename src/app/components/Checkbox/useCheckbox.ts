import { useState } from 'react';

export const useCheckbox = (initialState: boolean) => {
    const [checked, setChecked] = useState<boolean>(initialState);

    const toggle = () => {
        setChecked(!checked);
    };

    return { checked, toggle };
};