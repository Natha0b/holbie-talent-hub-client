import Link from "next/link";
import styles from './header.module.scss'
import { getSegment } from "@share/router/router.share";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // console.log(children);
    const segment = getSegment(children);
    // console.log(segment);

    return (
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
    );
}