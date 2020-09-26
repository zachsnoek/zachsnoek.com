import React, { useState, useEffect } from "react";
import { Router } from "./components/routing/";
import { UserContext } from "./context/UserContext";
import { loadUser } from "./utils/auth";

import "./App.scss";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const load = async () => {
            const userData = await loadUser();
            if (userData)
                setUser({ authenticated: true, token: localStorage.token });
        };

        if (localStorage.token) load();
    }, []);

    return (
        <div className="container">
            <UserContext.Provider value={{ user, setUser }}>
                <Router />
            </UserContext.Provider>
        </div>
    );
}

export default App;
