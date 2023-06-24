"use client";

import Link from 'next/link';
import stylesModules from './home.module.scss';
import { CSSProperties, useEffect, useState } from 'react';

export const  HeaderHome = () => {
  const [styles, setStyles] = useState<CSSProperties>({});
  const [debounce, setDebounce] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => setDebounce(true), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {

    const handleScroll = () => {
      if (!debounce) return;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const parallaxY = Math.ceil((scrollTop / window.innerHeight) * 50);
      setStyles({
        "--parallax-y": `${parallaxY ?? 0}%`,
      } as CSSProperties);
      setDebounce(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [styles, debounce]);
    return <header className={stylesModules.containerfondo} style={styles} >
        <div className={stylesModules.banner}>
            <h3 className={stylesModules.titlehome}>HOLBIE TALENT HUB</h3>
            <p className={stylesModules.textaboutme}>
                Te preparamos para la vida después de Holberton dando acompañamiento a tu búsqueda de empleo y te damos todas las herramientas necesarias para que tu proceso sea exitoso.Revisa aquí como funciona la mecánica y los requisitos que debes cumplir.
            </p>
            <div className={stylesModules.logincontainer}>
                <Link href="/login-company"  className={stylesModules.buttonlogin}>
                    Login for company
                </Link>
                <Link href="/login-professionals" className={stylesModules.buttonlogin}>
                    Login for holbie
                </Link>
            </div>
            <Link href="/register" className={stylesModules.buttonregister}>
                Register for company
            </Link>
        </div>
    </header>;
}