/* page of header */
"use client"
import Link from "next/link";
import { useState } from 'react'
import styles from './layout.module.scss'
import Logo from './logo.png'
import { useRouter } from 'next/navigation';
import LogoCode from './logocoderiseapp.png'
import { getSegment } from '$share/router/router.share';
import Cookies from 'js-cookie';
import { MdLogout } from "react-icons/md";
import Image from 'next/image';


interface FindLayoutPros {
    children: React.ReactNode
}

export default function FindLayout({ children }: FindLayoutPros) {

    const segment = getSegment(children);
    const [isDropdownOpen, updateOpen] = useState(false);
    const router = useRouter();

    function logout() {
        localStorage.removeItem('token');
        Cookies.remove('session');
        router.push('/');
        router.refresh();
    }

    return (
        <>
            <header className={styles["header"]}>
                <figure className={styles["header__company-icon"]}>
                    <Image src={Logo} alt='logo'
                    />
                </figure>

                <nav className={styles["navigation"]}>
                    <div
                        className={`${styles["navigation__buttons"]} ${segment.includes('profile') ? styles["navigation__buttons--active"] : ''}`}
                    >
                        <Link href="/find/profile" >find your profile</Link>
                    </div>
                    <div
                        className={`${styles["navigation__buttons"]} ${segment.includes('search') ? styles["navigation__buttons--active"] : ''}`}
                    >
                        <Link href="/find/search" >search profiles in hub</Link>
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
                <center><Image src={LogoCode} alt='logocode'
                /></center>
            </footer>
        </>
    );
}
