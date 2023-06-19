"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../login-professionals/login.module.scss';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
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
            <form onSubmit={handleLogin}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Email address"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.button} type="submit">Login</button>
            </form>
        </div>
    );
}
