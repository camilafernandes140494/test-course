import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        navigate("/dashboard")

    }
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <h1>Login</h1>
            <form onClick={handleSubmit} className="flex flex-col items-center justify-center gap-2">
                <input type="text" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira sua senha" />
                <button>Entrar</button>
            </form>
            <Link to={'/sing-up'}>Não tem cadastro? Clique aqui!</Link>

        </div>

    )
}