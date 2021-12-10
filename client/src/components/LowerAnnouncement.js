import React from "react";
import styled, { keyframes } from "styled-components";
import { small } from '../reducers/responsive';

const runningText = keyframes`
0% {transform:translateX(100%)}
100%{transform:translateX(-100%)}
`;

const Container = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-primary-7);
  overflow: hidden;
  ${small({ height: "4rem" })};
  & p {
    width: 100%;
    position: relative;
    top: 10px;
    animation: ${runningText} 20s infinite linear;
  }
`;

const LowerAnnouncement = () => {
  return (
    <Container>
      <p>
        С 20 декабря 2021 года по 15 января 2022 года проходит Большая зимняя распродажа.
        Вы можете купить брендовые товары по минимальным ценам, со скидками до 50%. {" "}
      </p>
    </Container>
  );
};

export default LowerAnnouncement;
