import logo from "../../assets/img/logo.png";
import useAuth from "../../hooks/useAuth";
import { Container, GreetingText, LogoContainer, NotificationIcon, NotificationsContainer, NotificationText, RightSideContainer, UserContainer, UserIcon } from "./Style";

function NavBar() {
    const { auth } = useAuth();
    const firstName = auth?.user ? getFirstName(auth.user.name): '';
    function getFirstName(fullName: string) {
        return fullName.split(' ')[0];
      }
    
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
                        <h1>{firstName}</h1>
                    </GreetingText>
                    <UserIcon />
                </UserContainer>
            </RightSideContainer>
        </Container>
    );
}

export default NavBar;




