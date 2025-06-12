import React from 'react';
import Dummy1 from './Images/dommyCourses-1.jpg';
import profile_img_1 from './Images/profile_img_1.png';
import profile_img_2 from './Images/profile_img_2.png'; 
import profile_img_3 from './Images/profile_img_3.png';
import linkdin from './Images/linkedin-logo.png';
import twitter from './Images/twitter-logo.png';
import instagram from './Images/instagram-logo.png';
import amazon from './Images/amazon.png';
import Padho from './Images/Padho.png';
import Padho2 from './Images/Padho2.png';
import Tcs from './Images/TCS.png';
import Wipro from './Images/Wipro.png';
import Adobe from './Images/Adobe.png';
import Student from './Images/student-1.jpg';

export const assets = {
    amazon,
    Padho,
    Padho2,
    linkdin,
    twitter,
    instagram,
    Tcs,
    Wipro,
    Student,
    Dummy1,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    Adobe
    
};

 export const companies = [
    {
      name: 'TCS',
      image: assets.Tcs,
      
    },
    {
      name: 'Wipro',
      image:assets.Wipro,
    },
    {
      name: 'amazon',
      image: assets.amazon,
    },
    {
      name: 'Adobe',
      image: assets.Adobe,
    }];

export const courses = [
        {
    "id": 1,
    "title": "Javascript for Beginners", 
    "description": "Learn the basics of JavaScript, the language of the web.",
    "price": "$20",
    "stars": "⭐⭐⭐⭐⭐",
    "image": assets.Dummy1,
        },
        {
    "id": 2,
    "title": "React for Beginners",             
    "description": "Build interactive user interfaces with React.",
    "price": "$30",
    "stars": "⭐⭐⭐⭐⭐",
    "image": "img2",
        },
        {
    "id": 3,
    "title": "Node.js for Beginners",       
    "description": "Learn server-side programming with Node.js.",
    "price": "$25", 
    "stars": "⭐⭐⭐⭐⭐",
    "image": "img3",
        },
        {
    "id": 4,
    "title": "Python for Beginners",        
    "description": "Get started with Python, a versatile programming language.",
    "price": "$15",
    "stars": "⭐⭐⭐⭐⭐",
    "image": "img4",    
        },
];

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating:  '⭐⭐⭐⭐⭐',
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating:  '⭐⭐⭐⭐',
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating:  '⭐⭐⭐',
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];