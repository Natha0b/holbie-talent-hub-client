"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.scss';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Realiza la lógica de autenticación aquí (comparar con una base de datos, API, etc.)
        // Por simplicidad, simplemente comprobamos si el usuario y la contraseña son "admin"
        if (username === 'admin' && password === 'admin') {
            router.push('/dashboard');
        } else {
            alert('Credenciales inválidas');
        }
    };

    return (
        <div className={styles.container}>
            <h1>Inicio de sesión</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Correo electronico"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
}