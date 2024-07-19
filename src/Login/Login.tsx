import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        navigate("/dashboard")

    }
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <h1>Sign in</h1>
            <form onClick={handleSubmit} className="flex flex-col items-center justify-center gap-2">
                <input type="text" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira sua senha" />
                <button>Login</button>
            </form>
        </div>

    )
}