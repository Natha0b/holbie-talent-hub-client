import { headers } from 'next/headers';
import Link from "next/link";
import './layout.css'
import { DiAndroid, DiAptana, DiDatabase } from "react-icons/di";
import  Card  from '../../components/card/card_page';

export default function Find(){
    const profiles =  [
        {
            jobName: 'Dev Android',
            location: 'Bogota D.C',
            kindJob: 'On site',
            icon: DiAndroid,
        },
        {
            kindJob: 'Remote',
            location: 'Medellin',
            jobName: 'Devops',
            icon: DiAptana,
        },
        {
            jobName: 'Back end',
            kindJob: 'Remote',
            location: 'Cartagena',
            icon: DiDatabase,
        }
    ];

    const listOfCities = [
        'Bogota D.C',
        'Medellin',
        'Cartagena',
        'Barranquilla',
        'Cali',
        'Bucaramanga',
        'Pereira',
        'Santa Marta',
        'Villavicencio',
        'Cucuta',
        'Ibague',
        'Pasto',
        'Manizales',
        'Armenia',
        'Neiva',
        'Popayan',
        'Monteria',
        'Valledupar',
        'Sincelejo',
        'Tunja',
        'Riohacha',
        'Florencia',
        'Yopal',
        'Quibdo',
        'Mocoa',
        'San Jose del Guaviare',
        'Mitú',
        'Puerto Carreño',
        'Leticia',
    ]; 

    return (
        <section className="profile">
            <h1 className="profile__title">Select the profile that you want</h1>
            <nav className="profile__navigation">
                {
                    profiles.map(({jobName, icon: Icon, location, kindJob}) => (
                        <article className="card">
                            < Card />
                            <aside  className="card__back">
                                <form className='form' action="edit-profile" method="post">
                                    <section className='form__item'>
                                        <label htmlFor="">Location</label>
                                        <input type="text"  list='locations' name="" id="" />
                                        <datalist id="locations">
                                            {
                                                listOfCities.map(city => (
                                                    <option value={city} />
                                                ))
                                            }
                                        </datalist>
                                    </section>
                                    <section className='form__item'>
                                        <label htmlFor="">Kind of job</label>
                                        <input type="text" value={kindJob} name="" id="" />
                                    </section>
                                    <section className='form__item form__submit'>
                                        <button type="submit">To find</button>
                                    </section>
                                </form>
                            </aside>
                        </article>
                    ))
                }
            </nav>
        </section>
    )

}