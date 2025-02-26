import logo from "../../../assets/img/logo.png";
import imagem from "../../../assets/img/imagem.png";
import { Container, ContainerSide, FormBox, Logo, Image, Form, LoginLink, Footer, InputBox, InputContainer, IconToggle } from "./Style";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [isDisabled, setIsDisabled] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function sendForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsDisabled(true);
        axios.post(`${import.meta.env.VITE_API_URL}/proof/session`, form)
          .then((response) => {
            const { data } = response;
            login({
                token: data.token,
                user: {
                  id: data.id,
                  name: data.profile.name,
                  email: data.email,
                }
            });
            setIsDisabled(false);
            navigate("/dashboard");
          })
          .catch((error) => {
            const message = error.response?.data?.message || 'Erro desconhecido. Tente novamente.';
            setErrorMessage(message);
            setIsDisabled(false);
            setForm({ email: "", password: "" });
          });
    }
    

    return (
        <Container>
        <ContainerSide>
            <Logo>
                <img src={logo} alt="Logo" />
            </Logo>
            <FormBox>
                <Form onSubmit={sendForm}>
                    <h2>E-mail</h2>
                    <InputContainer>
                        <InputBox type="email" name="email" value={form.email} onChange={handleForm} placeholder="seuemail@exemplo.com" required />
                    </InputContainer>
                    <h2>Senha</h2>
                    <InputContainer>
                        <InputBox type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleForm} placeholder="••••••••" required />
                        <IconToggle onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </IconToggle>
                        {errorMessage && <div style={{ color: 'red', marginTop: '10px', fontSize: '12px', fontWeight: '400' }}>{errorMessage}</div>}
                    </InputContainer>
                    
                    <h3><LoginLink onClick={() => navigate("/forgot-password")}>Esqueci a senha</LoginLink></h3>
                    <button type="submit" disabled={isDisabled}>Entrar</button>
                </Form>
            </FormBox>
            <Footer>
                ® Desenvolvido por Azape
            </Footer>
        </ContainerSide>
        <ContainerSide>
            <Image src={imagem} alt="Image"/>
        </ContainerSide>
    </Container>
    );
}

export default LoginPage;


