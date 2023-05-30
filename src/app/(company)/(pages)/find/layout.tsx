import { headers } from 'next/headers';
import Link from "next/link";
import './layout.css'

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    console.log(headers());
    console.log(headers().values());
    console.log(headers().keys());
    return (
        <>
            <header className="header">
                <figure className="header__company-icon">
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