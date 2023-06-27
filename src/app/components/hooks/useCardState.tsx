import { useState, useEffect, useRef, MutableRefObject, useCallback } from 'react';

type UseCardState = (id?: string) => ({
    active: boolean;
    activeShow: () => void;
    cardRef: MutableRefObject<HTMLElement | null>;
});

export const useCardState: UseCardState = (id = '') => {
    const [active, setActive] = useState(false);
    const cardRef = useRef<HTMLElement | null>(null);
    const [key, setKey] = useState<string>('');
    const [identifier, setIdentifier] = useState<string>('');

    useEffect(() => {
        setIdentifier(Number(Math.random() * 10000000000000000).toString(16));
    }, []);

    useEffect(() => {
        if (id.length > 0) {
            setKey(id);
        }
    }, [id])


    // use key like a key if local host and sync with the active state if the key is the same change to false if this component dnt chane the state
    // escucha los cambios conun setInterval
    useEffect(() => {
        if (key.length === 0)
            return;

        const timer = setInterval(() => {
            const [currentKey, value, currentId] = localStorage.getItem(key)?.split(':') ?? ['', '', ''];
            if (currentId !== identifier && value === 'true' && key === currentKey) {
                setActive(false);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        }

    }, [key, identifier]);

    useEffect(() => {
        localStorage.setItem(key, `${key}:${active}:${identifier}`);
    }, [key, active]);


    const activeShow = useCallback(() => {
        setActive(true);
    }, []);

    const hasUseReferenceAncestor = useCallback((element: HTMLElement): boolean => {
        let parent = element.parentElement;

        while (parent) {
            if (parent === cardRef.current) {
                return true;
            }
            parent = parent.parentElement;
        }

        return false;
    }, []);

    const validClose: (ev: MouseEvent) => void = useCallback((event) => {
        const { target } = event;

        if (cardRef.current && !hasUseReferenceAncestor(target as HTMLElement)) {
            setActive(false);
        }
    }, [hasUseReferenceAncestor]);


    useEffect(() => {

        if (cardRef.current) {
            document.body.addEventListener('click', validClose);
        }

        return () => {
            document.body.removeEventListener('click', validClose);
        };

    }, [validClose]);

    return {
        active,
        activeShow,
        cardRef,
    };
};


