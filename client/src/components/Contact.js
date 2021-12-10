import React from "react";
import styled from "styled-components";
import WhatsApp from '../assets/Icons/WhatsApp.png';
import ok from '../assets/Icons/ok.png';
import Gmail from '../assets/Icons/Gmail.png';
import telegram from '../assets/Icons/telegram.png';

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>Вы можете связаться с нами любым удобным для вас способом</h4>
        <div className="content">
          <div>
            <p>
              Напишите нам письмо на адрес zura.azersaeva@mail.ru - заявка будет создана автоматически и наши коллеги свяжутся с вами.
              Позвоните нам по телефону +7 938-997-65‐19, +90 0535-743-18-85. Наши сотрудники поддержки создадут заявку от вашего имени и соберут всю необходимую информацию.
            </p>
            <span className='contacts_item'>
                <img src={WhatsApp}  alt='icons'/>
                <img src={ok}  alt='icons'/>
                <img src={Gmail} alt='icons'/>
                <img src={telegram} alt='icons'/>
              </span>
          </div>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 2rem 0;
  h4 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .content .contacts_item {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .content .contacts_item img {
    margin-right: 15px;
    height: 40px;
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
`;

export default Contact;
