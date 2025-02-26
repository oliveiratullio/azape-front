import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #FFFFFF;
`
export const ContainerSide = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Logo = styled.div`
    width: 160px;
    height: 68px;
    margin-top: 96px;
`
export const FormBox = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    font-weight: 700;
    color: #FE7C6E;
    h2{
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 16px;
    }
    h3{
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 16px;
    }
`
export const Form = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    
    button{
        width: 100%;
        height: 48px;
        background-color: #FE7C6E;
        border-radius: 8px;
        margin-bottom: 16px;
        color: #FFFFFF;
        font-size: 14px;
        line-height: 21px;
        font-weight: 700;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const LoginLink = styled.span`
    color: #FE7C6E;
    cursor: pointer;
    font-weight: 700;

    &:hover {
        text-decoration: underline;
    }
`;

export const Footer = styled.div`
    width: 50%;
    height: 56px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    bottom: 0;
    position: absolute;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: #97A1A8;
`;



export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 16px;
`;

export const InputBox = styled.input`
    width: 100%;
    height: 48px;
    font-size: 14px;
    line-height: 21px;
    padding: 0 40px 0 8px;
    border: 1px solid #E6E6E6;
    border-radius: 8px;
`;

export const IconToggle = styled.div`
    position: absolute;
    right: 10px;
    top: 24px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #ccc;
`;
