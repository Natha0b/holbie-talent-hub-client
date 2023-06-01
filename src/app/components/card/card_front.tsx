import React from 'react';
import { profiles, listOfCities } from '../../../../public/data'
import { DiAndroid, DiAptana, DiDatabase } from "react-icons/di";

const Front_card = () => {
    return(
        profiles.map(({jobName, icon: Icon}) => (
            <div>
                <article className="card">
                    <main className="card__front">
                        <Icon className="card__icon" />
                        <h4 className="card__title">{jobName}</h4>
                    </main>
                </article>
            </div>
        )
        )
    )
}

export { Front_card };