/* page of header */
"use client"
import styles from './layout.module.scss'

interface FindLayoutPros {
    children: React.ReactNode
}

export default function FindLayout({ children }: FindLayoutPros) {

    return (
        <>
            <main className={styles["main"]}>
                {children}
            </main>
        </>
    );
}
