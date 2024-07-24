import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
    const navigate = useNavigate()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        navigate("/dashboard")

    }
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <h1>Cadastre-se</h1>
            <form onClick={handleSubmit} className="flex flex-col items-center justify-center gap-2">
                <input type="text" placeholder="Insira seu nome" />
                <input type="text" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira sua senha" />
                <button>Salvar</button>
            </form>
            <Link to={'/sing-up'}>Já tem cadastro? Clique aqui!</Link>

        </div>

    )
}