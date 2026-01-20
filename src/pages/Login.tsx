import { useEffect } from "react";

function Login() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "https://onlydance.at/login";
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Login</h1>
            <p>Du wirst gleich weitergeleitet...</p>
        </div>
    );
}

export default Login;
