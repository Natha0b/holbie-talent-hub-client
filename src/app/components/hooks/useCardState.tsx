import { useState, useEffect, useRef, MutableRefObject, useCallback } from 'react';

type UseCardState = () => ({
  active: boolean;
  activeShow: () => void;
  cardRef: MutableRefObject<HTMLElement | null>;
});

export const useCardState: UseCardState = () => {
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);

  
  // generic function to active the card when the mouse is over the card or when the card is clicked
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


