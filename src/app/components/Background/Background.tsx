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
        "position-y": positionY,
        "--position-x": `${positionX}%`,
        "--position-y": `${positionY + Number(styles['parallax-y' as keyof CSSProperties] ?? 0)}%`,
      } as CSSProperties);
      setDebounce(false);
    };

    const handleScroll = () => {
      if (!debounce) return;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const parallaxY = Math.ceil((scrollTop / window.innerHeight) * 20);
      setStyles({
        ...styles,
        "parallax-y": parallaxY,
        "--position-y": `${parallaxY + Number(styles['position-y' as keyof CSSProperties] ?? 0)}%`,
      } as CSSProperties);
      setDebounce(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [styles, debounce]);

  return <div style={styles} className={style.background}></div>;
};
