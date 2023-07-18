import styles from './ButtonSubmit.module.scss'

/**
 * The ButtonSubmit component represents a submit button in a form.
 * It is used to trigger form submission.
 */
const ButtonSubmit = () => (
    <section className={`${styles.form__item} ${styles.form__submit}`}>
        <button type="submit">To find</button>
    </section>
)

export { ButtonSubmit };
