import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ContactAbout() {
  return (
    <Wrapper>
      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box" data-aos="fade-right">
            <h4>партнеры</h4>
            <a href="#"> <i className="fas fa-map-marker-alt"/> Турция </a>
            <a href="#"> <i className="fas fa-map-marker-alt"/> Россия </a>
            <a href="#"> <i className="fas fa-map-marker-alt"/> Казахстан </a>
            <a href="#"> <i className="fas fa-map-marker-alt"/> Украина </a>
          </div>
          <div className="box" data-aos="fade-down">
            <h4>Навигация</h4>
            <Link to="/">Главная</Link>
            <Link to="/products">Товары</Link>
            <Link to="/about">О нас</Link>
            <Link to="/cart">Корзина</Link>
          </div>
          <div className="box" data-aos="fade-up">
            <h4>Контакты</h4>
            <a href="#"> <i className="fas fa-phone"/> +7 938 997-65‐19 </a>
            <a href="#"> <i className="fas fa-phone"/> +90 0535 743-18-85 </a>
            <a href="#"> <i className="fas fa-envelope"/> zura.azersaeva@mail.ru </a>
            <a href="#"> <i className="fas fa-map-marker-alt"/> Стамбул, Турция - 34520  </a>
          </div>
          <div className="box" data-aos="fade-left">
            <h4>сети</h4>
            <a href="https://www.instagram.com/modern_shop_istanbul_"> <i className="fab fa-instagram"/> instagram </a>
            <a href="#"> <i className="fab fa-facebook-f"/> facebook </a>
            <a href="#"> <i className="fab fa-twitter"/> twitter </a>
            <a href="#"> <i className="fab fa-pinterest"/> pinterest </a>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.footer`
  background: var(--clr-black);
  
  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  .box-container .box h4 {
    font-size: 1.2rem;
    color: var(--clr-primary-5);
    padding: 1rem 0;
  }
  .box-container .box a {
    font-size: 1rem;
    color: #aaa;
    //padding: 1rem 0;
    display: block;
  }
  .box-container .box a:hover {
    color: #fff;
  }
  .box-container .box a i {
    padding-right: .5rem;
    color: var(--main-color);
  }

  .box-container .box a:hover i {
    color: #fff;
  }
  @media (min-width: 992px) {
    .box-container {
      display: grid;
      justify-items: center;
      align-items: start;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  
  @media (min-width: 1280px) {
    padding: 2rem 0;
  }
`;

export default ContactAbout;