import { useState, useEffect, RefObject } from 'react';

type UseCardStateOptions = {
  cardRef: RefObject<HTMLElement | null>;
};

const useCardState = ({ cardRef }: UseCardStateOptions) => {
  const [active, setActive] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLElement> = (event) => {
    const { target } = event;

    if (cardRef.current && !hasUseReferenceAncestor(target as HTMLElement)) {
      setActive(false);
    }
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLElement> = () => {
    setActive(true);
  };

  const hasUseReferenceAncestor = (element: HTMLElement): boolean => {
    let parent = element.parentElement;

    while (parent) {
      if (parent === cardRef.current) {
        return true;
      }
      parent = parent.parentElement;
    }

    return false;
  };

  useEffect(() => {
    if (cardRef.current) {
      document.body.addEventListener('click', handleClick);
    }

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [cardRef.current]);

  return {
    active,
    handleClick,
    handleMouseEnter,
  };
};


export { useCardState };