import logo from "../../../assets/img/logo.png";
import imagem from "../../../assets/img/imagem.png";
import { Container, ContainerSide, FormBox, Logo, Image, Form, LoginLink } from "../Style";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();
    return (
        <Container>
            <ContainerSide>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>
                <FormBox>
                    <Form>
                        <h2>Nome</h2>
                        <input placeholder="Seu Nome" />
                        <h2>E-mail</h2>
                        <input placeholder="seuemail@exemplo.com" />
                        <h2>Senha</h2>
                        <input placeholder="••••••••" />
                        <button>Entrar</button>
                        <h3>Já possui uma conta? <LoginLink onClick={() => navigate("/")}>Login</LoginLink></h3>
                    </Form>
                </FormBox>
            </ContainerSide>
            <ContainerSide>
                <Image src={imagem} alt="Image"/>
            </ContainerSide>
        </Container>
    );
}

export default RegisterPage;

