import { headers } from 'next/headers';
import Link from "next/link";
import './layout.css'
import { DiAndroid, DiAptana, DiDatabase } from "react-icons/di";
import { Front_card } from '../../../../components/card/card_front'
import { profiles, listOfCities } from '../../../../../../public/data'
import { Back_card } from '../../../../components/card/card_back'
import { Job_card } from '../../../../components/card/card_job'
import { Submit_button } from '../../../../components/card/button_submit'

export default function Find(){
    return (
        <section className="profile">
            <h1 className="profile__title">Select the profile that you want</h1>
            <nav className="profile__navigation">
                {
                    profiles.map(({jobName, icon: Icon, location, kindJob}) => (
                        <article className="card">
                            <Front_card />
                            <aside  className="card__back">
                                <form className='form' action="edit-profile" method="post">
                                    <Back_card />
                                    <Job_card />                                    
                                    <Submit_button />
                                </form>
                            </aside>
                        </article>
                    ))
                }
            </nav>
        </section>
    )
}