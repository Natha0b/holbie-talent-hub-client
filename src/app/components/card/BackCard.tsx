import React from 'react';
import { listOfCities } from '../../(company)/(pages)/find/profile/profile.data'
import { JobCard } from './JobCard'
import { ButtonSubmit } from './ButtonSubmit'

const BackCard: React.FC<{ kindJob: string }> = ({ kindJob }) => {
    return (
        <aside className="card__back">
            <form className='form' action="edit-profile" method="post">
                <section className='form__item'>
                    <label htmlFor="">Location</label>
                    <input type="text" list='locations' name="" id="" />
                    <datalist id="locations">
                        {
                            listOfCities.map(city => (
                                <option value={city} />
                            ))
                        }
                    </datalist>
                </section>
                <JobCard kindJob={kindJob} />
                <ButtonSubmit />
            </form>
        </aside>
    )
}

export { BackCard };