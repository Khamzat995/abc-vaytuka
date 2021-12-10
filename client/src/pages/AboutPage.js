import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import flagOne from '../assets/Icons/flagOne.jpg';
import mailRu from '../assets/Icons/mailRu.png';
import instagramNew from '../assets/Icons/instagramNew.jpg'
import payment from '../assets/Icons/payment.png';
import WhatsApp  from '../assets/Icons/WhatsApp.png';
import telegram from '../assets/Icons/telegram.png';
import turkey from '../assets/Images/turkey.jpg';
import unnamed from '../assets/Images/unnamed.jpg';
import JumbotronOne from '../components/JumbotronOne';
import ContactAbout from '../components/ContactAbout';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="о нас" />
      <Wrapper className="page section section-center">
        <img src={turkey} alt='картинка'/>
        <article>
          <div className="title">
            <h2>О нас</h2>
            <div className="underline"/>
          </div>
          <p>
            Дорогие покупатели и посетители нашего интернет-магазина!<br/>
            Мы рады представить Вам товары популярных турецких и других зарубежных брендов
            бытовой техники, текстиля, одежды и аксессуаров. Наши цены Вас приятно удивят.
            Мы работаем напрямую от производителей, либо их представителей в Стамбуле.
            Здесь Вы можете приобрести качественную одежду, обувь, домашний текстиль, кожанные изделия и другие товары
            по низкой цене и мы доставим покупку к Вам домой. <br/>
            Дорогие друзья!
            Мы eженедельно проводим акции и распродажи определенных категорий товаров, постоянно действуют скидки, бесплатные подарки и многое другое.
            Мы открыты новым креативным идеям удивлять и радовать потребителей выгодными и интересными предложениями.<br/>
            </p>
        </article>
      </Wrapper>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>контакты</h2>
            <div className="underline"/>
          </div>
          <ul style={{ display:'grid', width: "100%"}} >
            <li style={{ display:'flex'}} >
              <img className="icon-item" src={WhatsApp} alt='icons' />
              <img className="icon-item" src={telegram} alt='icons' />
              <div className="number-item">
                <p>+7 938 997-65‐19 </p>
              </div>
            </li>
            <li  >
              <img className="icon-item" src={flagOne} alt='icons' />
              <div className="number-item">
                <p>+90 0535 743-18-85 </p>
              </div>
            </li>
            <li >
              <img className="icon-item" src={mailRu} alt='icons' />
              <div className="number-item">
                <p>zura.azersaeva@mail.ru</p>
              </div>
            </li>
            <li >
              <img className="icon-item" src={instagramNew} alt='icons' />
              <div className="number-item">
                <p>modern_shop_istanbul</p>
              </div>
            </li>
            <li >
              <img className="icon-item-one" src={payment} alt='icons' />
            </li>
          </ul>
        </article>
        <img src={unnamed} alt='картинка'/>
      </Wrapper>
      <JumbotronOne />
      <ContactAbout />
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  padding-bottom: 20px;
  padding-top: 20px;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    color: var(--clr-grey-5);
  }
  p {
    margin-top: 2rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  .icon-item {
    width: 40px;
    height: 40px;
    margin-left: 5px;
  }
  .icon-item-one {
    height: 30px;
    margin-top: 30px;
    margin-left: 5px;
  }
  li {
    width: 300px;
    display: flex;
    align-items: flex-end;
  }
  .number-item {
    width: 100%;
    padding-left: 10px;
  }
`;
export default AboutPage;
