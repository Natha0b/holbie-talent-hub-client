"use client"
import React from 'react';
import styles from './home.module.scss';
/// app/company/
// import LogoCode from '../../../@company/(pages)/find/logocoderiseapp.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { HeaderHome } from './HeaderHome';
import { FullProfessionalProfile, ProfessionalProfile, validation } from '../../../@company/(pages)/find/search/page';
import { fullProfiles } from '../../../@company/(pages)/find/search/fullProfiles';
import { TalentPreview } from '../../../@company/components/TalentPreview/TalentPreview';
import { useGuard } from '../../../../useGuard';
import { API } from '../../../../env';

const AuthorIds: Number[] = [2, 3, 4, 5, 6];

export default function HomeLogin() {
    const [talents, setTalents] = React.useState<ProfessionalProfile[]>([]);
    const [fullTalents, setFullTalents] = React.useState<FullProfessionalProfile[]>([]);
    useGuard();

    React.useEffect(() => {
        Promise.all(
            AuthorIds.map((id) => fetch(`${API}/api/v1/professional_profiles/${id}`).then(validation<ProfessionalProfile>({whenError: {} as ProfessionalProfile})))
        )
        .then((talents) => setTalents(talents.filter(Boolean)))
        .catch(error => console.error(error));
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
            <h3 className={styles.title}> About me </h3>
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
                        Holberton School Colombia<br/>It is an academy operated by Coderise SAS BIC
                        <span>
                            <a href="https://www.coderise.org" target="_blank" className={styles.linkcoderise}>
                                www.coderise.org
                            </a>
                        </span>
                    </p>
                    <span className={styles.contactnumber}> Write us Whatsapp +57 318 2263937</span>
                </div>

                {/*add contacts of always*/}
                <div className={styles.contactholbe}>
                    <a href="https://www.facebook.com/Coderise/" target="_blank" className={styles.facebook}><FaFacebook className={styles.contacticons} /></a>
                    <a href="https://www.instagram.com/coderiseorg/" target="_blank" className={styles.instagram}><FaInstagram className={styles.contacticons} /></a>
                    <a href="https://twitter.com/coderiseorg" target="_blank" className={styles.twitter}><FaTwitter className={styles.contacticons} /></a>
                    <a href="https://www.linkedin.com/company/coderise/about/" target="_blank" className={styles.linkedin}><FaLinkedin className={styles.contacticons} /></a>
                </div>
            </div>
        </>
    );
}