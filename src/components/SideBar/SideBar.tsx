import { PiChartBar } from "react-icons/pi";
import { Container, Dashboard, Icon } from "./Style";

function SideBar() {
    return (
        <Container>
            <Dashboard>
                <Icon>
                    <PiChartBar />
                </Icon>
                Dashboard
            </Dashboard>
        </Container>
    )
}

export default SideBar;


