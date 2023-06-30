"use client";
import React, { useState, useEffect } from "react";
import { ThemeButton } from "./@company/components/ThemeButton/ThemeButton";
import { ChatPanel } from "./@company/components/Chat/ChatPanel/ChatPanel";

export interface Authorization {
    role: string;
    token: string;
}

const key = "Authorization";
const getAuth =  () => {
    return JSON.parse(window.localStorage.getItem(key) ?? '{}') as Authorization;
}

export const ContentLayout = ({ professionals, company, unsignedin }: {
    children: React.ReactNode;
    professionals: React.ReactNode;
    company: React.ReactNode;
    unsignedin: React.ReactNode;
}) => {

    const [role, setRole] = useState('');

    useEffect(() => {
        const state = getAuth();
        setRole(state.role ?? "");
        window.addEventListener('storage', (event: StorageEvent) => {
            if (key === event.key)
                setRole(JSON.parse(event.newValue ?? "{role:''}").role ?? "");
        });
    }, []);
    const isProfessionals = role.toUpperCase().includes('ACADEMY-STUDENTS');
    const isCompany = role.toUpperCase().includes('COMPANY');

    return (<>
        <html lang="en">
            <body>
                {/* <Background /> */}
                {isProfessionals
                    ? professionals
                    : isCompany
                        ? company
                        : unsignedin}
                <ThemeButton />
                {(isProfessionals || isCompany) && <ChatPanel />}
            </body>
        </html>
    </>
    );
};
