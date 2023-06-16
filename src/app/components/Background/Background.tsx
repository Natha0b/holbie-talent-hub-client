"use client";
import { CSSProperties, useEffect, useState } from 'react';
import style from './Background.module.scss';

export const Background = () => {
  const [styles, setStyles] = useState<CSSProperties>({});
  const [debounce, setDebounce] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(true);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [debounce]);

  useEffect(() => {

    const handleMouseMove = (event: MouseEvent) => {
      if (!debounce) return;
      setDebounce(true);
      const { clientX, clientY } = event;
      const positionX = (clientX / window.innerWidth) * 20;
      const positionY = (clientY / window.innerHeight) * 20;

      setStyles({
        ...styles,
        "--position-x": `${positionX}%`,
        "--position-y": `${positionY}%`,
      } as CSSProperties);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [styles, debounce]);

  return <div style={styles} className={style.background}></div>;
};
