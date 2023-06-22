"use client"
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import fondohome from './fondohome.png';
import { getSegment } from '$share/router/router.share';
import LogoCode from '$company/(pages)/find/logocoderiseapp.png'
import { TalentPreview, Talent } from '$company/components/TalentPreview/TalentPreview';

const fakeData: Talent[] = [
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/95534180?v=4',
        name: 'Felipe Villamizar',
        title: 'Backend',
        bio: '...',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/106930148?v=4',
        name: 'Andres Solarte',
        title: 'Backend',
        bio: '....',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/114111326?v=4',
        name: 'Juan Esteban Duque',
        title: 'Backend',
        bio: '...',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/112909840?v=4',
        name: 'Laura Ortiz',
        title: 'Fronted',
        bio: '...',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/111533983?v=4',
        name: 'Yurany Ulchur',
        title: 'Fronted',
        bio: '...',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/106554564?v=4',
        name: 'Luis Puerta',
        title: 'Fronted',
        bio: '...',
    },
];

export default function HomeLogin({
    children,
}: {
    children: React.ReactNode
}) {

    console.log('children', children);
    const segment = getSegment(children);

    return (
        <>

            <header className={styles.containerfondo}>
                <div className={styles.banner}>
                    <h3 className={styles.titlehome}>HOLBIE TALENT CLUB</h3>
                    <p className={styles.textaboutme}>
                        Te preparamos para la vida después de Holberton dando acompañamiento a tu búsqueda de empleo y te damos todas las herramientas necesarias para que tu proceso sea exitoso. Revisa aquí como funciona la mecánica y los requisitos que debes cumplir.
                    </p>
                    <button className={styles.buttonlogin}>
                        Login
                    </button>
                    <button className={styles.buttonregister}>
                        Register
                    </button>
                </div>
            </header>

            <h3 className={styles.title}> About me</h3>
            <div className={styles.containertextabout}>

            </div>


            <h3 className={styles.title}>Staff</h3>
            <div className={styles.resultsContainer}>
                {fakeData.map((talent) => (
                    <TalentPreview talent={talent} />
                ))}
            </div>



            <footer className={styles.footer}>
                <center>
                    <Image src={LogoCode} alt="logocode" />
                </center>
                <p className={styles.paragraphcontact}>
                    Holberton School Colombia
                    Es una academia operada por
                    Coderise SAS BIC
                    www.coderise.org
                    <h5>EscríbenosWhatsapp +57 318 2263937</h5>
                </p>

            </footer>
        </>
    );
}
