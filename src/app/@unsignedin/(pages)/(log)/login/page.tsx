"use client"
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../login.module.scss';
import { Input } from '$components/Input/Input';
import { SuccessButton } from '$components/SuccessButton/SuccessButton';

export interface LoginRequestBody {
    "email": string;
    "password": string;
}

export interface User {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    created_at: Date;
    updated_at: Date;
    company_id: number | null;
    professional_id: number | null;
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = useCallback(() => {
        (async () => {
            try {
                /**
                 * POST 
                 */
                const user = await fetch(
                    "https://recruitment-system-production.up.railway.app/api/v1/login",
                    {
                        method: 'POST',
                        headers: {accept: 'application/json', 'content-type': 'application/json'},
                        body: JSON.stringify({
                            "email": email,
                            "password": password
                        } as LoginRequestBody)
                    }
                ).then((response) => response.json() as Promise<User>);

                const { role, user_id, email: emailResponse } = user;

                const key = "Authorization";

                const newValue = JSON.stringify({ role, token: `${user_id}:${emailResponse}` });

                localStorage.setItem(key, newValue);
                const event = new StorageEvent('storage', {
                    key,
                    newValue,
                });

                window.dispatchEvent(event);


                router.push('/find/profile');

            } catch(error) {
                console.error(error);
                router.push('/login');
            }
        })()
    }, [email, password]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>LOGIN</h1>
            <Input
                label="Email"
                value={email}
                onChange={setEmail}
            />
            <Input
                label="Password"
                value={password}
                onChange={setPassword}
            />
            <SuccessButton
                label='Login'
                onClick={handleLogin}
                style={{ width: '100%' }}
            />
        </div>
    );
}
