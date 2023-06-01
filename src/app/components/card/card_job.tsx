import React from 'react';
import { profiles, listOfCities } from '../../../../public/data'

const Job_card = () => {
    return (
    <div>  
        <article className="card">
            <aside  className="card__back">
                <form className='form' action="edit-profile" method="post">
                    <section className='form__item'>
                        <label htmlFor="">Kind of job</label>
                        <input type="text" value={kindJob} name="" id="" />
                    </section>
                </form>
            </aside>
        </article>    
    </div>
    )
}

export { Job_card };
