import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            отзывы
          </h3>
          <p>
            Ваши отзывы – очень важная часть нашей работы. Где сотни реальных покупателей и посетителей магазина обмениваются
            полезным опытом о товарах и услугах, делятся фото и видео, ставят оценки, создают рейтинги лучших, изучают инструкции
            по применению и предлагают аналоги, раздают лайфхаки и хитрости, советуют что посмотреть и где выгоднее купить, а также
            предупреждают о недостатках и проблемах.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, image, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{image}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;
  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius-rounded);
    transition: all 0.5s ease;
    p {
      color: var(--clr-primary-2);
    }
  }
  .service:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  }
  span {
    width: 6rem;
    height: 6rem;
    display: grid;
    margin: 0 auto 1rem;
    place-items: center;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
