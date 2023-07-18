"use client";
import stylesModules from './home.module.scss';
import { CSSProperties, useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export const HeaderHome = () => {
    const [styles, setStyles] = useState<CSSProperties>({}); // Status for dynamic styles
    const [debounce, setDebounce] = useState<boolean>(true); // Status for debounce

    useEffect(() => {
        const timer = setInterval(() => setDebounce(true), 1000); // Set a timer for debouncing
        return () => clearInterval(timer); // Clean the timer when the component is disassembled
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            if (!debounce) return; // Exit function if debounce is false
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const parallaxY = Math.ceil((scrollTop / window.innerHeight) * 50);
            setStyles({
                "--parallax-y": `${parallaxY ?? 0}%`,
            } as CSSProperties);
            setDebounce(false);
        };

        window.addEventListener("scroll", handleScroll); // Add the scroll event when listening to scroll

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
                <Link to="/login" className={stylesModules.buttonlogin}>
                    Login
                </Link>
            </div>
            <Link to="/register" className={stylesModules.buttonregister}>
                Register for company
            </Link>
        </div>
    </header>;
}