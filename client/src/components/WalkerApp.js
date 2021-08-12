import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import EditWalkerProfile from '../pages/EditWalkerProfile';
import JobPost from '../pages/JobPost';
import WalkerAppointment from '../pages/WalkerAppointment';
import WalkerHome from '../pages/WalkerHome';
import WalkerLogin from '../pages/WalkerLogin';
import WalkerPosts from '../pages/WalkerPosts';
import WalkerProfile from '../pages/WalkerProfile';
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
                <Route exact path="/walker-app/job-posts">
                    <WalkerPosts user={user} />
                </Route>
                <Route exact path="/walker-app/my-profile">
                    <WalkerProfile user={user} />
                </Route>
                <Route exact path="/walker-app/my-profile/edit" component={EditWalkerProfile}/>
                <Route path="/walker-app/job-posts/:id" component={JobPost}/>
                <Route path="/walker-app/my-appointments/:id" component={WalkerAppointment}/>
            </Switch>
        </main>
        </>
    )
}

export default WalkerApp;