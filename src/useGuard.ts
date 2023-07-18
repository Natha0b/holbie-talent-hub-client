import { useNavigation } from "react-router-dom";
import { useEasy } from 'use-easy';
import { User } from "./app/@unsignedin/(pages)/(log)/login/page";
import { useEffect } from "react";
const routesAccess = [
    { path: "/find/profile", roles: ["COMPANY"] },
    { path: "/find/search", roles: ["COMPANY"] },
    { path: "/find/your-profiles", roles: ["COMPANY"] },
    { path: "/watch/profile/", roles: ["COMPANY"] },
    { path: "/watch/project/", roles: ["COMPANY"] },
    { path: "/profile", roles: ["ACADEMY-STUDENTS"] },
    { path: "/", roles: ["UNSIGNEDIN"] },
    { path: "/acount-validation", roles: ["UNSIGNEDIN"] },
    { path: "/login", roles: ["UNSIGNEDIN"] },
    { path: "/register", roles: ["UNSIGNEDIN"] },
    { path: "/register-email", roles: ["UNSIGNEDIN"] },
];


const routesDefaultAccess = [
    { path: "/find/profile", role: "COMPANY" },
    { path: "/", role: "UNSIGNEDIN" },
    { path: "/profile", role: "ACADEMY-STUDENTS" },
];


export const useGuard = () => {
    const { state } = useEasy<{ user: User | null }>({ initial: { user: null } })

    useEffect(() => {
        const { role } = { role: "UNSIGNEDIN", ...state.user };
        const { pathname } = location;

        const route = routesAccess.find((route) => pathname.includes(route.path));

        if (!(route?.roles.includes(role))) {
            const { path } = routesDefaultAccess.find((route) => role.includes(route.role)) ?? { path: "/" };
            location.replace(path);
        }

    }, [state.user])

}