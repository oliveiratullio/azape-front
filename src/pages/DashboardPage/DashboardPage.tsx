import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { PiMathOperations, PiScrollLight } from "react-icons/pi";
import { LuCircleDollarSign } from "react-icons/lu";

function DashboardPage() {
    return (
        <>
        <NavBar />
        <SideBar />
        <Container>
            <Content>
                <TextBox>
                    <h1>Resumo dos Pedidos</h1>
                </TextBox> 
                <DataBox>
                    <ResumeBox>
                        <ResumeItem>
                            <IconCircle color="#F4C8E1">
                                <PiScrollLight style={{ width: '19.5px', height: '19.5px', color: '#E54594' }} />
                            </IconCircle>
                            <h2>200 Pedidos</h2>
                            <h1>R$ 50.480,95</h1>
                        </ResumeItem>
                        <ResumeItem>
                            <IconCircle color="#B6EEDD">
                                <LuCircleDollarSign style={{ width: '19.5px', height: '19.5px', color: '#07C693' }}/>
                            </IconCircle>
                            <h2>156 Vendas</h2>
                            <h1>R$ 35.480,95</h1>
                        </ResumeItem>
                        <ResumeItem>
                            <IconCircle color="#C3E7F3">
                                <PiMathOperations style={{ width: '19.5px', height: '19.5px', color: '#3CB0D9' }} />
                            </IconCircle>
                            <h2>Ticket médio</h2>
                            <h1>R$ 480,95</h1>
                        </ResumeItem>
                    </ResumeBox>
                </DataBox> 
            </Content>
        </Container>
        </>
    );
}   
export default DashboardPage

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
  `;

const Content = styled.div`
    min-width: calc(100% - 250px);
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 250px;
    overflow: hidden;
`;


const TextBox = styled.div`
    width: 100%;
    height: 23px;
    display: flex;
    flex-direction: column;
    margin: 24px 0 0 40px;
    h1 {
        font-size: 19px;
        font-weight: 400;
        line-height: 22.8px;
        color: #59666F;
    }
`;

const DataBox = styled.div`
    width: 1110px;
    height: calc(80vh - 56px);
    margin: 49px 0 0 40px;
    display: flex;
    flex-direction: column;
`;
const ResumeBox = styled.div`
    width: 1110px;
    height: 174px;
    display: flex;
    justify-content: space-between;
`;

const ResumeItem = styled.div`
    width: 360px;
    height: 174px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    line-height: 22.8px;
    h2{
        font-size: 19px;
        font-weight: 400;
        margin: 24px 0 0 24px;
    }
    h1{
        font-size: 19px;
        font-weight: 700;
        margin: 8px 0 0 24px;
    }
`;

const IconCircle = styled.div`
    width: 48px;
    height: 48px;
    margin: 24px 0 0 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.color || '#808080'};
`;