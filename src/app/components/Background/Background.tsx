"use client";
import { CSSProperties, useEffect, useState } from 'react';
import style from './Background.module.scss';

export const Background = () => {
  const [styles, setStyles] = useState<CSSProperties>({});
  const [debounce, setDebounce] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => setDebounce(true), 3000);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {

    const handleMouseMove = (event: MouseEvent) => {
      if (!debounce) return;
      const { clientX, clientY } = event;
      const positionX = Math.ceil((clientX / window.innerWidth) * 20);
      const positionY = Math.ceil((clientY / window.innerHeight) * 20);
      
      setStyles({
        ...styles,
        "--position-x": `${positionX}%`,
        "--position-y": `${positionY}%`,
      } as CSSProperties);
      setDebounce(false);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [styles, debounce]);

  return <div style={styles} className={style.background}></div>;
};
