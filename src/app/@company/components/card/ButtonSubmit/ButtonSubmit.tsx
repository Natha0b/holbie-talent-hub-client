import React from 'react';
import styles from './ButtonSubmit.module.scss'

const ButtonSubmit = () => (
    <section className={`${styles.form__item} ${styles.form__submit}`}>
        <button type="submit">To find</button>
    </section>
)

export { ButtonSubmit };