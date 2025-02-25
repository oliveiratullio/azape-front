import logoazape from "../../assets/img/logoazape.png";
import { Container, Side } from "./Style";

function Footer() {
    return (
        <Container>
            <Side>
                <h2>Termos de Uso</h2>
                <h2>Política de Privacidade</h2>
            </Side>
            <Side>
                <img src={logoazape} alt="Logo" />
                <h2>® Desenvolvido por Azape</h2>
            </Side>
        </Container>
    );
}

export default Footer;



