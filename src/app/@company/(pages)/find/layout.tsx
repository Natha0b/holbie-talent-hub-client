import { headers } from 'next/headers';
import Link from "next/link";
import styles from './layout.module.scss'
import Logo from './logo.png'
import LogoCode from './logocoderiseapp.png'
import { getSegment } from '$share/router/router.share';
import Image from 'next/image';

export default function DashboardLayout({
    children,  // The children prop that represents the content within the DashboardLayout component
}: {
    children: React.ReactNode  // The type definition for the children prop, indicating it should be of type React.ReactNode
}) {

    console.log('children', children);  // Log the children prop to the console
    const segment = getSegment(children);  // Call the getSegment function and pass the children prop as an argument
    // The result of getSegment is stored in the 'segment' variable
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
                        <Link href="/find/profile" >select your profile</Link>
                    </div>
                    <div
                        className={`${styles["navigation__buttons"]} ${segment.includes('other-one') ? styles["navigation__buttons--active"] : ''}`}
                    >
                        <Link href="/find/other-one" >custom your profile</Link>
                    </div>
                </nav>
                <div className={styles.containeravatar}>
                    <img className={styles.avatarprofile} src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1274656/draw_svg20211224-8647-tse8ye.svg.png" alt="Avatar" />
                </div>
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