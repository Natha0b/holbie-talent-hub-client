"use client"
import { useState } from 'react';
import styles from '../login.module.scss';
import { SuccessButton } from '../../../../components/SuccessButton/SuccessButton';
import { Input } from '../../../../components/Input/Input';


export default function Login() {
    const [username, setUsername] = useState('');


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>LOGIN SESSIÓN</h1>
            <Input
                label="Email address"
                value={username}
                onChange={setUsername}
            />
            <SuccessButton
                label='Register'
                onClick={() => {
                    console.log('click')
                }}
                style={{ width: '100%' }}
            />
        </div>
    );
}
