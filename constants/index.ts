
import backArrow from "@/assets/icons/back-arrow.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import naira from "@/assets/icons/naira.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import lock from "@/assets/icons/lock.png";
import heart from "@/assets/icons/heart.png";
import person from "@/assets/icons/person.png";
import search from "@/assets/icons/search.png";
import vector from "@/assets/icons/Vector.png";
import vector2 from "@/assets/icons/Vector2.png";
import vector3 from "@/assets/icons/Vector3.png";
import hamburger from "@/assets/icons/hamburger.png";
import user from "@/assets/icons/user.png";
import cart from "@/assets/icons/cart.png";
import settings from "@/assets/icons/settings.png";
import star from "@/assets/icons/star.png";
import check from "@/assets/images/check.png";
import icon from "@/assets/images/icon.png";
import getStarted from "@/assets/images/Get started.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import beauty from "@/assets/images/beauty.png";
import fashion from "@/assets/images/fashion.png";
import men from "@/assets/images/men.png";
import women from "@/assets/images/women.png";
import kids from "@/assets/images/kids.png";
import shopping from "@/assets/images/shooping.png";
import deal from "@/assets/images/deal of the day.png";
import kutan from "@/assets/images/woman kutan.png";
import footwear from "@/assets/images/footwear.png"
import offer from "@/assets/images/offer.png"
import offerImage from "@/assets/images/offerimage.png"
import mac from "@/assets/images/mac.png"
import deal2 from "@/assets/images/deal2.png"
import watch from "@/assets/images/watch.png"
import sneaker from "@/assets/images/sneaker.png"
import navy from "@/assets/images/navy.png"
import slidearrow from "@/assets/icons/slidearrow.png";
import hot from "@/assets/images/hot sales.png"
import discount from "@/assets/images/discount.png"
import heels from "@/assets/images/heels.png"
import clock from "@/assets/icons/clock.png";
import calender from "@/assets/icons/calender.png";
import black  from "@/assets/images/Black Winter.png"
import mens from "@/assets/images/Mens Starry.png"
import pink from "@/assets/images/Pink Embroide.png"
import redsneakers from "@/assets/images/redsneakers.png"
import camera from "@/assets/images/camera.png"
import flare from "@/assets/images/Flare Dress.png"
export const icons = {
    backArrow,
    checkmark,
    close,
    naira,
    email,
    eyecross,
    google,
    heart,
    home,
    lock,
    cart,
    settings,
    person,
    search,
    star,
    hamburger,
    user,
    vector,
    vector2,
    vector3,
    slidearrow,
    clock,
    calender
};


export const images = {
    onboarding1,
    onboarding2,
    onboarding3,
    check,
    getStarted,
    icon,
    beauty,
    men,
    women,
    kids,
    fashion,
    shopping,
    deal,
    kutan,
    footwear,
    offer,
    offerImage,
    mac,
    deal2,
    watch,
    sneaker,
    navy,
    hot,
    discount,
    heels,
    black,
    pink,
    mens,
    redsneakers,
    flare,
    camera
};


export const onboarding = [
  {
    id: 1,
    title: "Choose Products",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Make Payment",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Get Your Order",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: images.onboarding3,
  },
];

export const products = [
  {
    id: 1,
    title: "Black Winter...",
    description:
      "Autumn And Winter Casual cotton-padded jacket...",
    image: images.black,
    price: '8,000'
  },
 
  {
    id: 2,
    title: "Pink Embroide...",
    description:
      "EARTHEN Rose Pink Embroidered Tiered Max...",
    image: images.pink,
    price: '16,000'
  },
  {
    id: 5,
    title: "Flare Dress",
    description:
      "Autumn And Winter Casual cotton-padded jacket...",
    image: images.flare,
    price: '20,000'
  },
  {
    id: 6,
    title: "Camera",
    description:
      "EARTHEN Rose Pink Embroidered Tiered Max...",
    image: images.camera,
    price: '16,000'
  },
  {
    id: 8,
    title: "Pink Embroide...",
    description:
      "EARTHEN Rose Pink Embroidered Tiered Max...",
    image: images.pink,
    price: '16,000'
  },
 
  {
    id: 10,
    title: "Flare Dress",
    description:
      "Autumn And Winter Casual cotton-padded jacket...",
    image: images.flare,
    price: '20,000'
  },
];

export const homeImages = [
  {
    id: 1,
    title: "Beauty",
    image: images.beauty,
  },
  {
    id: 2,
    title: "Fashion",
    image: images.fashion,
  },
  {
    id: 3,
    title: "Kids",
    image: images.kids,
  },
  {
    id: 4,
    title: "Mens",
    image: images.men,
  },
  {
    id: 5,
    title: "Women",
    image: images.women,
  },
];

export const data = {
    onboarding,
    homeImages,
    products
};