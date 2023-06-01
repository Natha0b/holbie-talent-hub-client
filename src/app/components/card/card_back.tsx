import React from 'react';
import { profiles, listOfCities } from '../../../../public/data'

const Back_card = () => {
    return (
    <div>  
        <article className="card">
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
                </form>
            </aside>
        </article>    
    </div>
    )
}

export { Back_card };