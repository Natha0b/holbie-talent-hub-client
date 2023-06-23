"use client"
import React, { useState } from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import { getSegment } from '$share/router/router.share';
import LogoCode from '$company/(pages)/find/logocoderiseapp.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { TalentPreview, Talent } from '$company/components/TalentPreview/TalentPreview';


const fakeData: Talent[] = [
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/95534180?v=4',
        name: 'Felipe Villamizar',
        title: 'Backend',
        bio: 'in the world of programming and development, I love to learn and am truly passionate about what I love💙. I also want to pursue my career as a software engineer.👨🏻‍💻',
        githubLink: 'https://github.com/felipevcc',
        linkedinLink: 'https://www.linkedin.com/in/tu-perfil',
        slackLink: 'https://tu-slack-invite-link',
        gmailLink: 'https://tu-slack-invite-link',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/106930148?v=4',
        name: 'Andres Solarte',
        title: 'Backend',
        bio: 'in the world of programming and development, I love to learn and am truly passionate about what I love💙. I also want to pursue my career as a software engineer.👨🏻‍💻',
        githubLink: 'https://github.com/felipevcc',
        linkedinLink: 'https://www.linkedin.com/in/tu-perfil',
        slackLink: 'https://tu-slack-invite-link',
        gmailLink: 'https://tu-slack-invite-link',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/114111326?v=4',
        name: 'Juan Esteban Duque',
        title: 'Backend',
        bio: 'in the world of programming and development, I love to learn and am truly passionate about what I love💙. I also want to pursue my career as a software engineer.👨🏻‍💻',
        githubLink: 'https://github.com/felipevcc',
        linkedinLink: 'https://www.linkedin.com/in/tu-perfil',
        slackLink: 'https://tu-slack-invite-link',
        gmailLink: 'https://tu-slack-invite-link',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/112909840?v=4',
        name: 'Laura Ortiz',
        title: 'Fronted',
        bio: 'I am software developer👩🏽💻, I am passionate about technology, the new challenges and experiences that I am acquiring in this wonderful path of programming.',
        githubLink: 'https://github.com/felipevcc',
        linkedinLink: 'https://www.linkedin.com/in/tu-perfil',
        slackLink: 'https://tu-slack-invite-link',
        gmailLink: 'https://tu-slack-invite-link',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/111533983?v=4',
        name: 'Yurany Ulchur',
        title: 'Fronted',
        bio: 'I am just starting in this world of programming and development👩🏽💻 I love to learn and I am really passionate about what I like.💖',
        githubLink: 'https://github.com/felipevcc',
        linkedinLink: 'https://www.linkedin.com/in/tu-perfil',
        slackLink: 'https://tu-slack-invite-link',
        gmailLink: 'https://tu-slack-invite-link',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/106554564?v=4',
        name: 'Luis Puerta',
        title: 'Fronted',
        bio: ' in the world of programming and development, I love to learn and am truly passionate about what I love💙. I also want to pursue my career as a software engineer.👨🏻‍💻',
        githubLink: 'https://github.com/felipevcc',
        linkedinLink: 'https://www.linkedin.com/in/tu-perfil',
        slackLink: 'https://tu-slack-invite-link',
        gmailLink: 'https://tu-slack-invite-link',
    },
];

const handleClick = (
    githubLink: string,
    twitterLink: string,
    gmailLink: string,
    slackLink: string
) => { };


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
                        Te preparamos para la vida después de Holberton dando acompañamiento a tu búsqueda de empleo y te damos todas las herramientas necesarias para que tu proceso sea exitoso.Revisa aquí como funciona la mecánica y los requisitos que debes cumplir.
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
                <h3>¡Destaca y consigue tu empleo soñado!</h3>
                <p>
                    Bienvenido a Holbie Talent Club, tu plataforma de apoyo laboral para estudiantes de Holberton School
                    Aquí te ofrecemos las herramientas y recursos necesarios para que puedas sobresalir en el competitivo mundo
                    laboral y conseguir el empleo que siempre has deseado.
                </p>
                <h3>Tu puerta hacia el éxito profesional</h3>
            </div>

            {/*add infomation of always*/}
            <h3 className={styles.title}>Staff</h3>
            <div className={styles.resultsContainer}>
                {fakeData.map((talent) => (
                    <TalentPreview
                        talent={talent}
                        onClick={() => handleClick(talent.githubLink, talent.twitterLink, talent.gmailLink, talent.slackLink)}
                    />
                ))}
            </div>

            {/*add infomation of always*/}
            <h3 className={styles.title}> Contact </h3>
            <div className={styles.containercontact}>
                <div>
                    <p className={styles.paragraphcontact}>
                        Holberton School Colombia
                        Es una academia operada por
                        Coderise SAS BIC

                        <h5>
                            <a href="https://www.coderise.org" className={styles.linkcoderise}>
                                www.coderise.org
                            </a>
                        </h5>
                        <h5>EscríbenosWhatsapp +57 318 2263937</h5>
                    </p>
                </div>

                {/*add contacts of always*/}
                <div className={styles.contactholbe}>
                    <FaFacebook className={styles.contacticons} />
                    <FaInstagram className={styles.contacticons} />
                    <FaTwitter className={styles.contacticons} />
                    <FaLinkedin className={styles.contacticons} />
                </div>
            </div>



            <footer className={styles.footer}>
                <center>
                    <Image src={LogoCode} alt="logocode" />
                </center>
            </footer>
        </>
    );
}
