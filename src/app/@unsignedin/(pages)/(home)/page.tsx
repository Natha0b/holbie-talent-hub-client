"use client"
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import LogoCode from '$company/(pages)/find/logocoderiseapp.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { TalentPreview, Talent } from '$company/components/TalentPreview/TalentPreview';
import Link from 'next/link';
import { HeaderHome } from './HeaderHome';


const fakeData: Talent[] = [
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/95534180?v=4',
        name: 'Felipe Villamizar',
        title: 'Backend',
        bio: 'Software developer with knowledge in fullstack development. I am specialized in the backend area, where I have a solid experience in creating robust and scalable technical solutions for companies. Throughout my career, I have had the privilege of working on several team projects, collaborating with other industry professionals.👨🏻‍💻',
        githubLink: 'https://github.com/felipevcc',
        linkedinLink: 'https://www.linkedin.com/in/felipevc/',
        slackLink: '@Felipe Villamizar',
        gmailLink: 'felipevillamizarc@gmail.com',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/106930148?v=4',
        name: 'Andres Solarte',
        title: 'Backend',
        bio: 'Hi! Im Andres, a passionate software developer specialized in the backend domain. With a strong background in computer engineering and several years of experience in application development, been dedicated to building robust and scalable solutions that drive system performance and efficiency.👨🏻‍💻',
        githubLink: 'https://github.com/Andres98100',
        linkedinLink: 'https://www.linkedin.com/in/andres-solarte-a89b88214/',
        slackLink: '@Jaime Rodriguez',
        gmailLink: 'https://tu-slack-invite-link',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/114111326?v=4',
        name: 'Juan Esteban Duque',
        title: 'Backend',
        bio: 'in the world of programming and development, I love to learn and am truly passionate about what I love💙. I also want to pursue my career as a software engineer.👨🏻‍💻',
        githubLink: 'https://github.com/Juanesduque1',
        linkedinLink: 'https://www.linkedin.com/in/juanesduque/',
        slackLink: '@Juan Esteban Duque Morales',
        gmailLink: 'juanesduquemorales@gmail.com',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/112909840?v=4',
        name: 'Laura Ortiz',
        title: 'Fronted',
        bio: 'I am software developer👩🏽💻, I am passionate about technology, the new challenges and experiences that I am acquiring in this wonderful path of programming.',
        githubLink: 'https://github.com/Natha0b',
        linkedinLink: 'https://www.linkedin.com/in/laura-nathaly-ortiz-barona-7518ba222/',
        slackLink: '@Laura Nathaly Ortiz Barona',
        gmailLink: 'laura.barona04@gmail.com',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/111533983?v=4',
        name: 'Yurany Ulchur',
        title: 'Fronted',
        bio: 'I am just starting in this world of programming and development👩🏽💻 I love to learn and I am really passionate about what I like.💖',
        githubLink: 'https://github.com/YuranyUlchur?tab=followers',
        linkedinLink: 'https://www.linkedin.com/in/tu-perfil',
        slackLink: '@Yurany Ulchur',
        gmailLink: 'ulchuryurani80@gmail.com',
    },
    {
        profilePicture: 'https://avatars.githubusercontent.com/u/106554564?v=4',
        name: 'Luis Puerta',
        title: 'Fronted',
        bio: ' in the world of programming and development, I love to learn and am truly passionate about what I love💙. I also want to pursue my career as a software engineer.👨🏻‍💻',
        githubLink: 'https://github.com/Remenyr',
        linkedinLink: ' http://www.linkedin.com/in/luis-alejandro-puerta-alvarez-567b82279',
        slackLink: '@Luis Alejandro Puerta Alvarez',
        gmailLink: 'puertaalejo02@gmail.comk',
    },
];


export default function HomeLogin() {

    return (
        <>

            <HeaderHome />

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
            <h3 className={styles.title}> Staff </h3>
            <div className={styles.resultsContainer}>
                {fakeData.map((talent) => (
                    <TalentPreview
                        talent={talent}
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
                        <span>
                            <a href="https://www.coderise.org" className={styles.linkcoderise}>
                                www.coderise.org
                            </a>
                        </span>
                        <span>EscríbenosWhatsapp +57 318 2263937</span>
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

