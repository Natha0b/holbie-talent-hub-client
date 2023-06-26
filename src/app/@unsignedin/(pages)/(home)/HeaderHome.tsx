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
                Welcome to our page dedicated to connecting talented Holberton School students with innovative companies
                looking to hire new talent in the technology field. On this page, you will find information about companies that
                are interested in hiring Holberton School students, as well as the benefits of joining them.
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