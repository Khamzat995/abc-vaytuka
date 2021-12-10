import React from 'react'
import picTwo from '../assets/Images/picTwo.png'
import picThree from '../assets/Images/picThree.png'
import picFour from '../assets/Images/picFour.png'

export const links = [
  {
    id: 1,
    text: 'главная',
    url: '/',
  },
  {
    id: 2,
    text: 'товары',
    url: '/products',
  },
  {
    id: 3,
    text: 'о нас',
    url: '/about',
  },
]

export const services = [
  {
    id: 1,
    image: <img src={picFour} style={{borderRadius: "50px", width: "100px"}} alt="картинка" />,//<GiStabbedNote />,
    title: 'Марьяма',
    text:
      'Часто бываю с подругами в Вашем магазине. Ассортимент товаров приятно радует своим разнообразием, качеством и отличностью от представленного в других магазинах.',
  },
  {
    id: 2,
    image: <img src={picThree} style={{borderRadius: "50px", width: "100px"}} alt="картинка" />,//<GiStabbedNote />,
    title: 'Анзор',
    text:
      'Хочется надеяться, что Ваш магазин будет расширяться и развиваться. Больно уж хороший у Вас ассортимент, общая атмосфера и адекватные цены.',
  },

  {
    id: 3,
    image: <img src={picTwo} style={{borderRadius: "50px", width: "100px"}} alt="картинка"  />,//<GiDiamondHard/>,
    title: 'Наташа',
    text:
      'Здесь не проблема найти нужные вещи, полезные товары, мелочёвку и приятные сувениры. Часто проходят акции и скидки. Продавцы доброжелательны и расположены к общению с посетителями.',
  },
]

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url = 'http://localhost:3051/products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
 export const single_product_url = `http://localhost:3051/products/`