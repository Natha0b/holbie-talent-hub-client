import './layout.css'
import { FrontCard } from '../../../../components/card/FrontCard'
import { BackCard } from '../../../../components/card/BackCard'
import { JobCard } from '../../../../components/card/JobCard'
import { ButtonSubmit } from '../../../../components/card/ButtonSubmit'
import { profiles } from '../profile/profile.data'

export default function Find() {
    return (
        <section className="profile">
            <h1 className="profile__title">Select the profile that you want</h1>
            <nav className="profile__navigation">
                {
                    profiles.map(({ jobName, icon: Icon, location, kindJob }) => (
                        <article className="card">
                            <FrontCard Icon={Icon} jobName={jobName} />
                            <BackCard kindJob={kindJob} />
                            <JobCard kindJob={kindJob} />
                            <ButtonSubmit />
                        </article>
                    ))
                }
            </nav>
        </section>
    )
}
