import React from 'react';
import { profiles, listOfCities } from '../../../../public/data'

const Submit_button = () => {
    return (
    <div>  
        <article className="card">
            <aside  className="card__back">
                <section className='form__item form__submit'>
                    <button type="submit">To find</button>
                </section>
            </aside>
        </article>    
    </div>
    )
}

export { Submit_button };