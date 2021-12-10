import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron as Jumbo } from 'reactstrap';
import styled from 'styled-components';
import woman from '../assets/Images/woman.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${woman}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 550px;
    position: relative;
    z-index: -2;
  }
  .container-fluid {
    padding-top: 100px;
    padding-left: 120px;
    padding-right: 120px;
  }
  .overlay {
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .content {
    color: #222;
  }
  h3 {
    margin-bottom: 2rem;
    font-size: 2.8rem;
  }
  p {
    font-size: 1.25rem;
  }
`;

const Jumbotron = () => {
  return (
    <Styles>
    <Jumbo fluid className='jumbo'>
      <div className='overlay'> </div>
      <Container fluid className='container-fluid'>
          <article className="content">
            <h3>
              Дорогие друзья! </h3>
            <br />
            <p>Добро пожаловать в наш онлайн-магазин.<br />
              Для Вас доступен заказ широкого ассортимента
              продукции, который постоянно пополняется.
              Вы сможете в любой момент узнать о действующих акциях и распродажах, проводимых конкурсах и поступивших новинках наиболее популярных товаров.
            </p>
          </article>
      </Container>
    </Jumbo>
    </Styles>
  );
}

export default Jumbotron;
