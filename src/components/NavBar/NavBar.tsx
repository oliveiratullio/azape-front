import logo from "../../assets/img/logo.png";
import { Container, GreetingText, LogoContainer, NotificationIcon, NotificationsContainer, NotificationText, RightSideContainer, UserContainer, UserIcon } from "./Style";

function NavBar() {
    return (
        <Container>
            <LogoContainer>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <RightSideContainer>
                <NotificationsContainer>
                    <NotificationIcon />
                    <NotificationText>Avisos</NotificationText>
                </NotificationsContainer>
                <UserContainer>
                    <GreetingText>
                        <h2>Olá,</h2>
                        <h1>Gabriel</h1>
                    </GreetingText>
                    <UserIcon />
                </UserContainer>
            </RightSideContainer>
        </Container>
    );
}

export default NavBar;




