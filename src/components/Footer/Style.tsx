import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;
  padding-left: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5;
  bottom: 0;
  position: relative;
`;

export const Side = styled.div`
  width: 20%;
  padding: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #97A1A8;
    text-decoration: underline;
  }
  img{
    margin-left: 30px;
  }
`;