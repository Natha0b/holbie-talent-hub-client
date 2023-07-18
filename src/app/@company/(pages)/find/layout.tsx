/* page of header */
"use client"
import { useState } from 'react'
import styles from './layout.module.scss'
import Logo from './logo.png'
import LogoCode from './logocoderiseapp.png'
import Cookies from 'js-cookie';
import { MdLogout } from "react-icons/md";

import { Link, useNavigate, useNavigation } from "react-router-dom";


interface FindLayoutPros {
    children: React.ReactNode
}

export default function FindLayout({ children }: FindLayoutPros) {

    const [isDropdownOpen, updateOpen] = useState(false);
    const router = useNavigate();
    const {location} = useNavigation();
    function logout() {
        localStorage.removeItem('token');
        Cookies.remove('session');
        router('/');
    }

    return (
        <>
            <header className={styles["header"]}>
                <figure className={styles["header__company-icon"]}>
                    <img src={Logo} alt='logo'
                    />
                </figure>

                <nav className={styles["navigation"]}>
                    <div
                        className={`${styles["navigation__buttons"]} ${location?.pathname.includes('profile') ? styles["navigation__buttons--active"] : ''}`}
                    >
                        <Link to="/find/profile" >find your profile</Link>
                    </div>
                    <div
                        className={`${styles["navigation__buttons"]} ${location?.pathname.includes('search') ? styles["navigation__buttons--active"] : ''}`}
                    >
                        <Link to="/find/search" >search profiles in hub</Link>
                    </div>
                </nav>

                <div className={styles.containeravatar}>
                    <img className={`${styles.avatarprofile} ${isDropdownOpen ? styles.active : ''}`}
                        src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1274656/draw_svg20211224-8647-tse8ye.svg.png"
                        alt="Avatar"
                        onClick={() => updateOpen(!isDropdownOpen)} />
                    <div className={styles.containerlogout}>
                        <button className={styles["logout-button"]} onClick={logout}><MdLogout /></button>
                    </div>
                </div>
            </header>

            <main className={styles["main"]}>
                {children}
            </main>
            <footer className={styles["footer"]}>
                <center><img src={LogoCode} alt='logocode'
                /></center>
            </footer>
        </>
    );
}
