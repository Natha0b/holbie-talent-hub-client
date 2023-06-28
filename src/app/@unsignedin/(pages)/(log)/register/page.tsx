"use client"
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../login.module.scss';
import { Input } from '$components/Input/Input';
import { Dropdown } from '$components/Dropdown/Dropdown';
import { SuccessButton } from '$components/SuccessButton/SuccessButton';
import { User } from "$/app/@unsignedin/(pages)/(log)/login/page";
import { IDropdownItem } from '$components/Dropdown/Dropdown.type';
import {  BsFillGearFill, BsFillPersonFill, BsFillPersonDashFill, BsFillPersonCheckFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

const roles: IDropdownItem[] = [
    {
        name: "COMPANY-STAFF",
        Icon: BiUser,
        color: "#FF0000",
        value: "COMPANY-STAFF",
    },
    {
        name: "COMPANY-CTO",
        Icon: BsFillGearFill,
        color: "#00FF00",
        value: "COMPANY-CTO",
    },
    {
        name: "COMPANY-CEO",
        Icon: BsFillPersonFill,
        color: "#0000FF",
        value: "COMPANY-CEO",
    },
    {
        name: "COMPANY-ADMIN",
        Icon: BsFillPersonDashFill,
        color: "#FF00FF",
        value: "COMPANY-ADMIN",
    },
    {
        name: "COMPANY-RECRUITER",
        Icon: BsFillPersonCheckFill,
        color: "#FFFF00",
        value: "COMPANY-RECRUITER",
    },
];


export interface RegistrationRequestBody {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: string;
}




export default function Register() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [passwordValid, setPasswordValid] = useState('');
    const [role, setRole] = useState('');
    const router = useRouter();

    const handleLogin = useCallback(() => {
        (async () => {
            try {
                await fetch(
                    "https://recruitment-system-production.up.railway.app/api/v1/registration",
                    {
                        method: 'POST',
                        headers: {accept: 'application/json', 'content-type': 'application/json'},
                        body: JSON.stringify({
                            "first_name": first_name,
                            "last_name": last_name,
                            "email": email,
                            "password": password,
                            "role": role,
                        } as RegistrationRequestBody)
                    }
                ).then((response) => response.json() as Promise<User>);


                router.push('/login');

            } catch(error) {
                console.error(error);
                router.push('/register');
            }
        })()
    }, [first_name, last_name, role, password, email]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>REGISTRATION</h1>
            <Input
                label="First name"
                value={first_name}
                onChange={setFirstName}
            />
            <Input
                label="Last name"
                value={last_name}
                onChange={setLastName}
            />
            <Input
                label="Email"
                value={email}
                onChange={setEmail}
            />
            <Dropdown
                label='Role'
                items={roles}
                onItemSelect={({value}) => setRole(value as string)}
            />
            <Input
                label="Password"
                value={password}
                onChange={setPassword}
            />
           {/*  <Input
                label="Password"
                value={passwordValid}
                onChange={setPasswordValid}
            /> */}
            <SuccessButton
                label='Register'
                onClick={handleLogin}
                style={{ width: '100%' }}
            />
        </div>
    );
}
