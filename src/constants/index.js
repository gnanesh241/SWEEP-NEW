import { facebook, instagram, twitter } from "../assets/icons";
import {  customer1, customer2} from "../assets/images";
import { item1 } from "../assets/images";
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
    { href: "https://swachhbharatmission.gov.in/SBMCMS/writereaddata/Portal/Images/pdf/brochure/mhmbrochure.pdf", label: "Education" },
];


export const products = [
    {
        imgURL: item1   ,
        name: "AMALA EARTH",
        price: "$290.20",

    },
    {
        imgURL: item1 ,
        name: "PEE SAFE",
        price: "$210.20",
    },
    {
        imgURL: item1 ,
        name: "MYCARMESI",
        price: "$220.20",
    },
    {
        imgURL: item1 ,
        name: "SPARKLE",
        price: "$230.20",
    },
    {
        imgURL: item1 ,
        name: "CARE FOR TWO YOU & EARTH",
        price: "$200.20",
    },
    {
        imgURL: item1 ,
        name: "FAB PAD",
        price: "$210.20",
    },
    {
        imgURL: item1 ,
        name: "ORGANYC",
        price: "$220.20",
    },
    {
        imgURL: item1 ,
        name: "STAY GREEN",
        price: "$230.20",
    },
    {
        imgURL: item1 ,
        name: "AZAH",
        price: "$200.20",
    },
    {
        imgURL: item1 ,
        name: "HONEY POT",
        price: "$210.20",
    },
    {
        imgURL: item1 ,
        name: "GRACE AND GREEN",
        price: "$220.20",
    },
    {
        imgURL: item1,
        name: "YONI",
        price: "$230.20",
    },

];


export const services = [
  
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "AMALA EARTH", link: "https://amala.earth/" },
            { name: "MYCARMESI", link: "/" },
            { name: "CARE FOR TWO YOU & EARTH", link: "/" },
            { name: "SPARKLE", link: "/" },
            { name: "FAB PAD", link: "/" },
            { name: "PEE SAFE", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "contactsweeptech@gmail.com", link: "mailto:contactsweeptech@gmail.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
