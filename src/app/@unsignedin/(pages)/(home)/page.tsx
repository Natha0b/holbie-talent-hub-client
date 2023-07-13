"use client"
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import LogoCode from '$company/(pages)/find/logocoderiseapp.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { TalentPreview } from '$company/components/TalentPreview/TalentPreview';
import { HeaderHome } from './HeaderHome';
import { fullProfiles, FullProfessionalProfile, ProfessionalProfile } from '$/app/@company/(pages)/find/search/page';

const AuthorIds: Number[] = [2, 3, 4, 5, 6];

export default function HomeLogin() {
    const [talents, setTalents] = React.useState<ProfessionalProfile[]>([]);
    const [fullTalents, setFullTalents] = React.useState<FullProfessionalProfile[]>([]);

    React.useEffect(() => {
        Promise.all(
            AuthorIds.map(async (id) => {
                return fetch(`https://recruitment-system-production.up.railway.app/api/v1/professional_profiles/${id}`)
                    .then(response => response.json())
            })
        ).then((talents) => setTalents(talents));
    }, []);

    React.useEffect(() => {
        (async () => {
            if (!talents) return;
            const completeTalents: FullProfessionalProfile[] = await fullProfiles(talents);
            setFullTalents(completeTalents);
        })().catch(error => console.error(error));
    }, [talents]);

    return (
        <>
            <HeaderHome />
            <h3 className={styles.title}> About me</h3>
            <div className={styles.containertextabout}>
                <h3>¡Stand out and get your dream job!
                </h3>
                <p>
                    Our page dedicated to boosting employment opportunities for talented Holberton School students.
                    Our main goal is to establish a strong bridge between Holberton students and leading companies looking to hire highly skilled professionals in the technology field.
                    On this platform, we strive to connect students with exciting and meaningful job opportunities that allow them to put into practice their skills and knowledge acquired at Holberton School.
                </p>
                <h3>Your gateway to professional success</h3>
            </div>

            {/*add infomation of always*/}
            <h3 className={styles.title}> Staff </h3>
            <div className={styles.resultsContainer}>
                {fullTalents.map((talent, key) => (
                    <TalentPreview
                        key={key}
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
                        It is an academy operated
                        <span>
                            <a href="https://www.coderise.org" className={styles.linkcoderise}>
                                www.coderise.org
                            </a>
                        </span>
                    </p>
                    <span className={styles.contactnumber}> Write us Whatsapp +57 318 2263937</span>
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