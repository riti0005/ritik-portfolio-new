// src/data/projectData.js

import pro1Image from '../assets/images/pro1.PNG';
import pro2Image from '../assets/images/pro2.PNG';
import pro3Image from '../assets/images/pro3.PNG';
import pro4Image from '../assets/images/Notifications-website.PNG';
import CVImage from '../assets/images/cv.jpg';
import DesignImage from '../assets/images/design.jpg';

const projects = [
  {
    id: 1,
    title: 'TSHIRT STOREFRONT',
    description: 'TShirts Storefront is an online platform built with Vue.js, offering a sleek interface for browsing and purchasing various shirt styles. This project showcases my expertise in modern web development and user-friendly design.',
    image: pro1Image,
    link: '/projects/tshirt-storefront',  
  },
  {
    id: 2,
    title: 'THE MEANING OF EMOJIS',
    description: 'The Meaning of Emojis explores the significance and cultural impact of emojis in digital communication. This project highlights my ability to convey complex ideas through interactive web elements and modern design.',
    image: pro2Image,
    link: '/projects/meaning-of-emojis',  
  },
  {
    id: 3,
    title: 'FLOWER SHOP',
    description: 'Flower Shop is an e-commerce website showcasing a variety of fresh flowers and arrangements. This project demonstrates my skills in building visually appealing and functional online platforms with a focus on user experience.',
    image: pro3Image,
    link: '/projects/flower-shop',  
  },
  {
    id: 4,
    title: 'NOTIFICATIONS',
    description: 'Notifications is a web application that allows users to view and manage notifications with the option to clear all or individually. It features an attractive design and a seamless user experience for efficient notification management.',
    image: pro4Image,
    link: '/projects/notifications',  
  },
  {
    id: 5,
    title: 'CV',
    description: 'I have created a visually appealing and professional CV using Figma. This project highlights my design skills and proficiency in creating clean, modern layouts that effectively showcase personal and professional information.',
    image: CVImage,
    link: '/projects/cv', 
  },
  {
    id: 6,
    title: 'DESIGNED SPACES',
    description: 'Designed Spaces showcases my creativity in designing visually engaging spaces using a challenging color palette. This project demonstrates my ability to blend aesthetics and functionality in unique, thoughtfully crafted designs.',
    image: DesignImage,
    link: '/projects/designed-spaces', 
  }
];

export default projects;
