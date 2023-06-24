import Link from "next/link";
import styles from './layout.module.scss'
import Logo from './logo.png'
import LogoCode from './logocoderiseapp.png'
import { getSegment } from '$share/router/router.share';
import Image from 'next/image';

interface FindLayoutPros {
    children: React.ReactNode
}

export default function FindLayout({ children }: FindLayoutPros) {
    const segment = getSegment(children);
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
                        <Link href="/find/profile" >your profile</Link>
                    </div>
                    <div
                        className={`${styles["navigation__buttons"]} ${segment.includes('search') ? styles["navigation__buttons--active"] : ''}`}
                    >
                        <Link href="/find/other-one" >search profiles</Link>
                    </div>
                </nav>
                <div className={styles.containeravatar}>
                    <img className={styles.avatarprofile} src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1274656/draw_svg20211224-8647-tse8ye.svg.png" alt="Avatar" />
                </div>

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