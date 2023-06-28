"use client";
import "$share/styles/globals.scss";
import "$share/styles/background.scss";
import { Background } from "./components/Background/Background";
import React, {useState, useEffect} from "react";
import { ThemeButton } from "./@company/components/ThemeButton/ThemeButton";
import { ChatPanel } from "./@company/components/Chat/ChatPanel/ChatPanel";
// import { getSegment } from "@share/router/router.share";

/*
import crypto from "node:crypto";
Web tonken
Function to validate the auth with the headers and return the role of the user


const validateAuthSinc = (headers: Headers) => {
    // without fetch and sinc
    const token = headers.get('Authorization') ?? '';
    const role = headers.get('Role');
    // validate the token withouth fetch
    const isValid = crypto.timingSafeEqual(
        Buffer.from(token),
        Buffer.from("key")
    );

    return { token, role, isValid };
}


const validateAuth = async (headers: Headers) => {
    // validate the token
    const response = await fetch('http://localhost:3000/api/auth/validate', {
        method: 'GET',
        headers: {
            'Authorization': headers.get('Authorization'),
            'Role': headers.get('Role')
        } as HeadersInit
    });
    const { token, role } = await response.json();

    return { token, role };
}

export async function getAuth() {
    // const { token, role } = await validateAuth(headers());

    const { token, role } = { token: null, role: 'company' };
    return {
        token,
        role
    };
}
*/

export interface Authorization {
    role: string;
    token: string;
}

const key = "Authorization";
const getAuth =  () => {
    return JSON.parse(window.localStorage.getItem(key) ?? '{}') as Authorization;
}

export default function AuthLayout(
    { professionals, company, unsignedin: unsignedIn }: {
        professionals: React.ReactNode;
        company: React.ReactNode;
        unsignedin: React.ReactNode;
    }
) {
    // return new Promise<Omit<React.ReactNode, "then">>(async (resolve) => {

        const [role, setRole] = useState('');

        useEffect(() => {
            const state = getAuth();
            setRole(state.role ?? "")
            window.addEventListener('storage', (event: StorageEvent) => {
                console.log('storage', event.key, event.newValue);
                if (key === event.key)
                    setRole(event.newValue ?? "");
            });
        }, [])

        

        const content = (children: React.ReactNode, chat: boolean) => (<>
            <html lang="en">
                <body>
                    <Background />
                    {
                        children
                    }
                    <ThemeButton />
                    {chat && <ChatPanel />}
                </body>
            </html>
        </>);

        if (role.toUpperCase().includes('ACADEMY-STUDENTS'))
            return /* resolve( */content(professionals, true) /* as Omit<React.ReactNode, "then"> )*/;

        if (role.toUpperCase().includes('COMPANY'))
            return /* resolve( */content(company, true) /* as Omit<React.ReactNode, "then"> )*/;

        return /* resolve( */content(unsignedIn, false) /* as Omit<React.ReactNode, "then">) */
    //});

}