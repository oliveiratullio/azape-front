import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.05);
    position: fixed;
    top:0;
    left: 0;
    z-index: 1;
`;

export const Dashboard = styled.div`
    width: 218px;
    height: 48px;
    top: 104px;
    left: 16px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    border-radius: 8px;
    background-color: #FE7C6E;
    color: #FFFFFF;
    padding: 0 16px;
    position: absolute;
    z-index: 1;
`;

export const Icon = styled.div`
    font-size: 16px;
    width: 16px;
    height: 16px;
    margin-right: 16px;
`;