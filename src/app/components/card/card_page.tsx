import { headers } from 'next/headers';
import Link from "next/link";
import { DiAndroid, DiAptana, DiDatabase } from "react-icons/di";
import React from 'react';

const Card = () => {
    return(
        <div>
            <article className="card">
                <main className="card__front">
                    <Icon className="card__icon" />
                    <h4 className="card__title">{jobName}</h4>
                </main>
            </article>
        </div>
        )
};

export default Card;


