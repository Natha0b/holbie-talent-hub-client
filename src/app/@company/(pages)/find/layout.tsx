import { headers } from 'next/headers';
import Link from "next/link";
import styles from './layout.module.scss'
import Logo from '../../../../../public/logo.png'
import { getSegment } from '$/app/share/router/router.share';

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
                    <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/79001/331125_630361.png"
                    />
                </figure>
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
                <center><img src="https://apply.holbertonschool.com/holberton-logo.png" alt="Image 1" /></center>
            </footer>
        </>
    );
}