import logo from "../../../assets/img/logo.png";
import imagem from "../../../assets/img/imagem.png";
import { Container, ContainerSide, FormBox, Logo, Image, Form, LoginLink } from "../Style";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    return (
        <Container>
            <ContainerSide>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>
                <FormBox>
                    <Form>
                        <h2>E-mail</h2>
                        <input placeholder="seuemail@exemplo.com" />
                        <h2>Senha</h2>
                        <input placeholder="••••••••" />
                        <h3>Esqueci a senha</h3>
                        <button>Entrar</button>
                        <h3>Não possui uma conta? <LoginLink onClick={() => navigate("/register")}>Registre-se</LoginLink></h3>
                    </Form>
                </FormBox>
            </ContainerSide>
            <ContainerSide>
                <Image src={imagem} alt="Image"/>
            </ContainerSide>
        </Container>
    );
}

export default LoginPage;

