import { fireEvent, render, screen } from "@testing-library/react"
import { Login } from "./Login"

const navigateMock = vi.fn();

describe("Testa o componente de login", () => {

    vi.mock("react-router-dom", () => ({
        useNavigate() {
            return navigateMock
        },
        Link: vi.fn().mockImplementation((props) => props.children)
    }))

    test("Deve haver um title Login", async () => {
        render(<Login />);
        const title = await screen.findByRole("heading", {
            name: 'Login'
        });
        expect(title).toBeInTheDocument();
    });

    test("Deve haver dois inputs", async () => {
        render(<Login />);
        const inputs = await screen.findAllByRole("textbox");
        expect(inputs).toHaveLength(2);
    });

    test("Deve haver um botão", async () => {
        render(<Login />);
        const button = await screen.findByRole("button");
        expect(button.textContent).toBe('Entrar');
    });

    test('Deve haver um input para e-mail', async () => {
        render(<Login />);
        const inputEmail = await screen.findByPlaceholderText('Insira seu e-mail')
        expect(inputEmail).toBeInTheDocument()
    });

    test('Deve haver um input senha', async () => {
        render(<Login />);
        const inputSenha = await screen.findByPlaceholderText('Insira sua senha')
        expect(inputSenha).toBeInTheDocument()
    });

    test("Botão quando clicado", async () => {
        render(<Login />);
        const button = await screen.findByRole("button");
        fireEvent.click(button)
        expect(navigateMock).toHaveBeenCalledTimes(1);
    });

    test('Deve haver um link para tela de cadastro', async () => {
        render(<Login />);
        const link = await screen.getByText('Não tem cadastro? Clique aqui!')
        expect(link).toBeInTheDocument()
    });
})