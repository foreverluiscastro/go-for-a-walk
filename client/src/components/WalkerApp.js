import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import WalkerHome from '../pages/WalkerHome';
import WalkerLogin from '../pages/WalkerLogin';
import WalkerNavBar from './WalkerNavBar';

function WalkerApp() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // auto-login
        fetch("/walker").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);

    if  (!user) return <WalkerLogin onLogin={setUser}/>

    return (
        <>
        <WalkerNavBar user={user} setUser={setUser}/>
        <main>
            <Switch>
                <Route exact path="/walker-app">
                    <WalkerHome user={user} />
                </Route>
            </Switch>
        </main>
        </>
    )
}

export default WalkerApp;