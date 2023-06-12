import React from 'react';
import styles from './UserProfilePage.module.scss';

// Import other components used within UserProfilePage
import {ProfileHeader} from '$company/components/ProfileHeader/ProfileHeader';
import {ProjectSection} from '$company/components/ProjectSection/ProjectSection';
import {ExperienceSection} from '$company/components/ExperienceSection/ExperienceSection';
import {EducationSection} from '$company/components/EducationSection/EducationSection';
import {SkillSection} from '$company/components/SkillSection/SkillSection';
import {TeamWorkSection} from '$company/components/TeamWorkSection/TeamWorkSection';
import {TestimonialSection} from '$company/components/TestimonialSection/TestimonialSection';

export default function UserProfilePage()  {
  return (
    <div className={styles.userProfilePage}>
      <ProfileHeader />
      <div className={styles.contentWrapper}>
        <ProjectSection />
        <ExperienceSection />
        <EducationSection />
        <SkillSection />
        <TeamWorkSection />
        <TestimonialSection />
      </div>
    </div>
  );
};
