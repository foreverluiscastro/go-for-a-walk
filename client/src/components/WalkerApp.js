import React, { useEffect, useState } from "react";
import WalkerLogin from "../pages/WalkerLogin";
import WalkerNavBar from "./WalkerNavBar";

function WalkerApp() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);

    if (!user) return <WalkerLogin onLogin={setUser} />

    return (
        <>
            <WalkerNavBar user={user} setUser={setUser} />
            <main>
                
            </main>
        </>
    )
}

export default WalkerApp;