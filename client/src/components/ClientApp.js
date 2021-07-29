import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ClientNavBar from './ClientNavBar';
import ClientLogin from '../pages/ClientLogin';
import ClientHome from '../pages/ClientHome';


function ClientApp() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // auto-login
        fetch("/client").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);

    if (!user) return <ClientLogin onLogin={setUser} />;
    
    return (
        <>
        <ClientNavBar user={user} setUser={setUser}/>
        <main>
            <Switch>
                <Route exact path="/client-home" component={ClientHome}/>
            </Switch>
        </main>
        </>
    )
}

export default ClientApp;