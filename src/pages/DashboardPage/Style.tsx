import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
`;

export const Content = styled.div`
  min-width: calc(100% - 250px);
  min-height: 100vh;
  margin-top: 80px;
  margin-left: 250px;
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 23px;
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 40px;
  h1 {
    font-size: 19px;
    font-weight: 400;
    line-height: 22.8px;
    color: #59666f;
  }
`;

export const DataBox = styled.div`
  width: 1450px;
  height: auto;
  margin: 49px 0 0 40px;
  display: flex;
  flex-direction: column;
`;
export const ResumeBox = styled.div`
  width: 1110px;
  height: 174px;
  display: flex;
  justify-content: space-between;
`;

export const ResumeItem = styled.div`
  width: 360px;
  height: 174px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  line-height: 22.8px;
  h2 {
    font-size: 19px;
    font-weight: 400;
    margin: 24px 0 0 24px;
  }
  h1 {
    font-size: 19px;
    font-weight: 700;
    margin: 8px 0 0 24px;
  }
`;

export const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  margin: 24px 0 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#808080"};
`;
export const TableBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 60px;
  border-radius: 8px;
  overflow: hidden;
`;
