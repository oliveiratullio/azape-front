import { MdAccountCircle, MdNotificationsNone } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    position: absolute;
    background-color: #FFFFFF;
    justify-content: space-between;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    z-index: 2;
`;

export const LogoContainer = styled.div`
    width: 120px;
    height: 51px;
    margin: 24px 0 0 65px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const RightSideContainer = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 42px;
`;

export const NotificationsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px; 
`;

export const NotificationIcon = styled(MdNotificationsNone)`
    font-size: 24px;
    color: #59666F;
`;

export const NotificationText = styled.span`
    margin-left: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #59666F;
    line-height: 21px;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const GreetingText = styled.div`
    color: #59666f;
    margin-right: 8px;
    line-height: 21px;
    h1{
        font-size: 19px;
        font-weight: 700;
    }
    h2{
        font-size: 14px;
        font-weight: 400;
    }
`;

export const UserIcon = styled(MdAccountCircle)`
    font-size: 40px;
    color: #FE7C6E;
`;