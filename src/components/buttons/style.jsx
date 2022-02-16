import styled from "styled-components";

export const BtnElementTop = styled.button`
  width: 45px;
  height: 45px;
  margin: 6px;
  border-radius: 5px;
  background-color: #5bc6f0;
  color: #c5f5f8;
  border: none;
  transition: 0.3s ease;
  cursor: pointer;

  :hover {
    background-color: #c9e7f3;
    color: #575a5a;
  }
`;

export const BtnBottom = styled.button`
  height: 73px;
  width: 80px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: 0.5s ease;
  :hover {
    background-color: #c9e7f3;
    color: #575a5a;
  }
`;

export const BtnEqual = styled.button`
  height: 43px;
  width: 60px;
  margin: 6px;
  background-color: #5bc6f0;
  color: #c5f5f8;
  border-radius: 5px;
  border: none;
  transition: 0.5s ease;
  :hover {
    background-color: #91d5f0;
    color: #575a5a;
  }
`;
