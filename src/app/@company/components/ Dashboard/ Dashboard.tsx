"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
    const router = useRouter();

    // Verifica si el usuario está autenticado, si no lo está, redirige a la página de inicio de sesión
    useEffect(() => {
        // Realiza la lógica de autenticación aquí (comprobar si hay una sesión activa, token, etc.)
        // Por simplicidad, simplemente redirigimos si no hay un "usuario" en el localStorage
        if (!localStorage.getItem('user')) {
            router.push('/login');
        }
    }, []);

    const handleLogout = () => {
        // Realiza la lógica de cierre de sesión aquí (eliminar token, borrar sesión, etc.)
        // Por simplicidad, simplemente eliminamos el "usuario" del localStorage
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <div className={styles.container}>
            <h1>¡Bienvenido al panel de control!</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
}