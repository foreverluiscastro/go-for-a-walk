import React, { useEffect, useState } from "react";
import ClientLogin from "../pages/ClientLogin";
import ClientNavBar from "./ClientNavBar";

function ClientApp() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);

    if (!user) return <ClientLogin onLogin={setUser} />

    return (
        <>
            <ClientNavBar user={user} setUser={setUser} />
            <main>
                
            </main>
        </>
    )
}

export default ClientApp;