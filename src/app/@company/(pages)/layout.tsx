import styles from './layout.module.scss'
// import { getSegment } from "@share/router/router.share";

export default function DashboardLayout({
    children,
    header,
  }: {
    children: React.ReactNode
    header: React.ReactNode
  }) {
    // const segment = getSegment(children);
    console.log(header)
    return (
        <>
            <header className={styles["header"]}>
                <figure className={styles["header__company-icon"]}>
                </figure>
                {header} 
                <figure  className={styles["header__profile-icon"]}>
                </figure>
            </header>
            <main> 
                {children}
            </main>
        </>
    );
  }