import { headers } from 'next/headers';
import Link from "next/link";
import styles from './layout.module.scss'
import Logo from './logo.png'
import LogoCode from './logocoderiseapp.png'
import { getSegment } from '$share/router/router.share';
import Image from 'next/image';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    console.log('children', children);
    const segment = getSegment(children);

    return (
        <>
            <header className={styles["header"]}>
                <figure className={styles["header__company-icon"]}>
                    <Image src={Logo} alt='logo'
                    />
                </figure>
                {/*
                <div className={styles.containeravatar}>
                    <img className={styles.avatarprofile} src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar" />

                </div>*/}
                <nav className={styles["navigation"]}>
                    <div
                        className={`${styles["navigation__buttons"]} ${segment.includes('profile') ? styles["navigation__buttons--active"] : ''}`}
                    >
                        <Link href="/find/profile" >select your profile</Link>
                    </div>
                    <div
                        className={`${styles["navigation__buttons"]} ${segment.includes('other-one') ? styles["navigation__buttons--active"] : ''}`}
                    >
                        <Link href="/find/other-one" >custom your profile</Link>
                    </div>
                </nav>
                <figure className={styles["header__profile-icon"]}>
                </figure>
            </header>
            <main>
                {children}
            </main>
            <footer className={styles["footer"]}>
                <center><Image src={LogoCode} alt='logocode'
                /></center>
            </footer>
        </>
    );
}