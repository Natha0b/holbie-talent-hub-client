import React from 'react';
import styles from './TestimonialSection.module.scss';

/**
 * The TestimonialSection component represents a section that displays testimonials.
 * It renders testimonial cards with avatars, testimonial text, and author information.
 * The component uses CSS modules to style its elements.
 */
export const TestimonialSection: React.FC = () => {
    return (
        <div className={styles.testimonialSection}>
            <h2 className={styles.sectionTitle}>Testimonials</h2>
            {/* Render testimonial cards */}
            <div className={styles.testimonialCard}>
                <img src="/path/to/testimonial-avatar.jpg" alt="Testimonial" className={styles.testimonialAvatar} />
                <p className={styles.testimonialText}>John is an exceptional web developer with a keen eye for detail. He consistently delivers high-quality work and is a pleasure to work with.</p>
                <p className={styles.testimonialAuthor}>Jane Smith, CEO at ABC Company</p>
            </div>
            {/* Add more testimonial cards */}
        </div>
    );
};

