"use client"
import {  useState } from 'react';
import styles from '../login.module.scss';
import { Input } from '../../../../components/Input/Input';
import { SuccessButton } from '../../../..//components/SuccessButton/SuccessButton';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>LOGIN SESSIÓN</h1>

            <Input
                label="Email address"
                value={username}
                onChange={setUsername}
            />
            <Input
                label="Password"
                value={password}
                onChange={setPassword}
            />
            <SuccessButton
                label='Login'
                onClick={() => {
                    console.log('click')
                }}
                style={{ width: '100%' }}
            />
        </div>
    );
}