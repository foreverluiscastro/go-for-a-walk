import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ClientNavBar from './ClientNavBar';
import ClientLogin from '../pages/ClientLogin';
import ClientHome from '../pages/ClientHome';
import NewPost from '../pages/NewPost';
import ClientProfile from '../pages/ClientProfile';
import ClientDogs from '../pages/ClientDogs';
import EditPost from '../pages/EditPost';
import ClientPost from '../pages/ClientPost';


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
                <Route exact path="/client-app">
                    <ClientHome user={user}/>
                </Route>
                <Route exact path="/client-app/my-dogs">
                    <ClientDogs user={user}/>
                </Route>
                <Route path="/client-app/new-post">
                    <NewPost user={user} />
                </Route>
                <Route path="/client-app/my-profile">
                    <ClientProfile user={user} />
                </Route>
                <Route path="/client-app/posts/:id/edit" component={EditPost}/>
                <Route path="/client-app/posts/:id" component={ClientPost}/>
            </Switch>
        </main>
        </>
    )
}

export default ClientApp;