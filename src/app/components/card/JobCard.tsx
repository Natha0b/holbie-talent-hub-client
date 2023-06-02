import React from 'react';

const JobCard: React.FC<{ kindJob: string }> = ({ kindJob }) => {

    return (
        <section className='form__item'>
            <label htmlFor="">Kind of job</label>
            <input type="text" value={kindJob} name="" id="" />
        </section>
    )
}

export { JobCard };
