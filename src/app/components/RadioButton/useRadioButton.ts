import { useState } from 'react';

export const useRadioButton = (name: string, initialState: boolean) => {
    const [checked, setChecked] = useState<boolean>(initialState);

    const select = () => {
        setChecked(true);
    };

    return { name, checked, select };
};
