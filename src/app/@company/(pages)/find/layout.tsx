import { headers } from 'next/headers';
import Link from "next/link";
import styles from './layout.module.css'
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
    </>
  );
}