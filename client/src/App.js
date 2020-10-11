import React, { useState, useEffect } from "react";
import { Router } from "components/routing";
import { UserProvider } from "context/UserContext";
import { loadUser } from "utils/auth";
import "styles/globals.scss";
import { Container } from "components/shared";

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
        <Container>
            <UserProvider value={{ user, setUser }}>
                <Router />
            </UserProvider>
        </Container>
    );
}

export default App;
