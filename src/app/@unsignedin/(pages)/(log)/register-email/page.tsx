"use client"
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../login.module.scss';
import { SuccessButton } from '$components/SuccessButton/SuccessButton';
import { Input } from '$components/Input/Input';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            router.push('/dashboard');
        } else {
            alert('Credenciales inválidas');
        }
    };

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
