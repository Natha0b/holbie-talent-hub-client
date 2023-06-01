import { headers } from 'next/headers';
import Link from "next/link";
import './layout.css'
import Logo from '../../../../../public/logo.png'

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {

    return (
        <>
            <header className="header">
                <figure className="header__company-icon">
                    <img
                        src="/logo.png"
                        alt="Coderrise Logo"
                        className="dark:invert"
                        width={85}
                        height={50}
                     />
                </figure>
                <nav className="header__navigation">
                  <div className="header__buttons-navigation">
                    <Link href="#" >select your profile</Link>
                  </div>
                  <div  className="header__buttons-navigation --active">
                    <Link href="#" >custom your profile</Link>
                  </div>
                </nav>
                <figure  className="header__profile-icon">

                </figure>
            </header>
            <main> 
                {children}
            </main>
        </>
    );
  }