import React from 'react';
import Contact from './Contact';

  const users = [
    {
      name: 'Ryu',
      avatar: 'https://vignette.wikia.nocookie.net/streetfighter/images/c/ce/IMG_0506.png/revision/latest?cb=20170310152338',
      online: false,
      life: '4',
      power: '4',
      speed: '3',
      combo: '2',
      special: '3'
      
    },
    {
      name: 'Ken Master',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true,
      life: '3',
      power: '4',
      speed: '3',
      combo: '3',
      special: '3'
    },
    {
      name: 'Colonel Guile',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true,
      life: '4',
      power: '3',
      speed: '3',
      combo: '2',
      special: '3'
    },
    {
      name: 'Chun-li',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false,
      life: '2',
      power: '3',
      speed: '4',
      combo: '4',
      special: '3'
    },
    {
      name: 'Akuma',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true,
      life: '4',
      power: '5',
      speed: '3',
      combo: '3',
      special: '5'
    }
  ];


//on parcours a l'aide de map le tableaux USER et on affiche chaque element de ce tableaux a la manieres de contact mais avec les valeurs de cet élément.
const ContactList = () =>
  users.map(props => <Contact name = {props.name} 
                              avatar = {props.avatar} 
                              online = {props.online} 
                              life = {props.life} 
                              power = {props.power} 
                              speed = {props.speed}
                              combo = {props.combo}
                              special = {props.special}/>);



  export default ContactList;
