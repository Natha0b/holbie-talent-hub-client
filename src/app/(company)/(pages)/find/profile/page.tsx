import { headers } from 'next/headers';
import Link from "next/link";
import './layout.css'

export default function Find(){
    const profiles =  [
        {
            jobName: 'Full Stack',
            icon: <figure></figure>,
        },
        {
            jobName: 'Front End',
            icon: <figure></figure>,
        }
    ];

    return (
        <section className="profile__selector">
            <h1 className="profile__title">Select the profile that you want</h1>
            <nav className="profile__navigation">
                {
                    profiles.map(({jobName, icon}) => (
                        <article className="profile__item">
                            <h4 className="profile__subtitle">{jobName}</h4>
                            {icon}
                        </article>
                    ))
                }
            </nav>
        </section>
    )

}