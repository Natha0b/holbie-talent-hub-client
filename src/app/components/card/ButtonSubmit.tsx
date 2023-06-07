import React from 'react';
import styles from '../styles/ButtonSubmit.module.css'

const ButtonSubmit = () => {
    return (
        <section className={`${styles.form__item} ${styles.form__submit}`}>
            <button type="submit">To find</button>
        </section>
    )
}

export { ButtonSubmit };