import logo from "../assets/images/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-big2 bg-kalas1 mt-24 relative">
      <div className="mx-40">
        <div className="flex justify-between h-7 items-center py-16">
          <a href="#" className="w-36 h-6">
            <img src={logo} alt="logo"></img>
          </a>
          <ul className="flex text-kalas5 gap-12 tracking-small font-fonty text-sm font-bold ">
            <li className="hover:text-kalas">
              <a href="#">HOME</a>
            </li>
            <li className="hover:text-kalas">
              <a href="#">HEADPHONES</a>
            </li>
            <li className="hover:text-kalas">
              <a href="#">SPEAKERS</a>
            </li>
            <li className="hover:text-kalas">
              <a href="#">EARPHONES</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <p className="font-fonty font-medium text-base text-kalas8 w-big1 h-24">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex gap-4 items-end">
            <FaFacebookSquare className="text-kalas5" />
            <FaTwitter className="text-kalas5" />
            <FaInstagram className="text-kalas5" />
          </div>
        </div>

        <p className="text-kalas8 mt-16">Copyright 2021. All Rights Reserved</p>
      </div>
      ;
    </div>
  );
};

export default Footer;
