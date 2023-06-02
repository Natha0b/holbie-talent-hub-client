import React from 'react';
import { IconType } from 'react-icons';

const FrontCard: React.FC<{ jobName: string, Icon: IconType }> = ({ Icon, jobName }) => {
    return (
        <main className="card__front">
            <Icon className="card__icon" />
            <h4 className="card__title">{jobName}</h4>
        </main>
    )
}

export { FrontCard };