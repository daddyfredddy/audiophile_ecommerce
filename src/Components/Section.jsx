import sectionImg1 from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import sectionImg2 from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import sectionImg3 from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import sectionImg4 from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import sectionImg5 from "../assets/home/desktop/image-earphones-yx1.jpg";
import sectionImg6 from "../assets/shared/desktop/image-best-gear.jpg";
import heroHeadphone from "../assets/home/desktop/image-hero.jpg";

import Path1 from "../assets/images/Path1.png";
import Mask1 from "../assets/images/Mask1.png";
import Mask2 from "../assets/images/Mask2.png";
import Mask3 from "../assets/home/desktop/image-speaker-zx7.jpg";

const Section = () => {
  return (
    <div>
      {/* START HERO */}

      <div
        className="bg-cover h-screen mt-0 bg-bottom"
        style={{ backgroundImage: `url(${heroHeadphone})` }}
      >
        <div className="absolute w-96 mt-44 mx-40">
          <h3 className="font-fonty text-kalas8 tracking-big text-sm font-normal mt-0">
            NEW PRODUCT
          </h3>
          <h1 className="font-fonty text-kalas5 text-6xl mt-10 font-bold absolute ">
            XX99 MARK II
            <br /> HEADPHONES
          </h1>
          <div className="w-96 mt-44 absolute">
            <p className="text-kalas8 font-medium text-base">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>

          <button className="btn1 mt-72">SEE PRODUCT</button>
        </div>
      </div>

      {/* START SECTION ONE */}

      <div className="mx-40 ">
        <div className="mt-32 flex justify-between ">
          <div className="h-72 w-80 justify-items-center relative">
            <div
              className="bg-cover w-80 h-48 justify-items-center mt-24 absolute -z-10"
              style={{ backgroundImage: `url(${Mask1})` }}
            >
              <h3 className="font-fonty font-bold text-lg tracking-small mt-20">
                HEADPHONES
              </h3>
              <div className="flex items-center pt-6">
                <p className="btn3">SHOP</p>
                <img src={Path1} className="path1" />
              </div>
            </div>
            <img
              src={sectionImg1}
              alt="headphone1 pic"
              className="w-40 h-40 -z-50"
            />
          </div>
          <div className="h-72 w-80 justify-items-center relative">
            <div
              className="bg-cover w-80 h-48 justify-items-center mt-24 absolute -z-10"
              style={{ backgroundImage: `url(${Mask1})` }}
            >
              <h3 className="font-fonty font-bold text-lg tracking-small mt-20">
                SPEAKERS
              </h3>
              <div className="flex items-center pt-6">
                <p className="btn3">SHOP</p>
                <img src={Path1} className="path1" />
              </div>
            </div>
            <img
              src={sectionImg2}
              alt="speaker1 pic"
              className="w-40 h-40 -z-50"
            />
          </div>
          <div className="h-72 w-80 justify-items-center relative">
            <div
              className="bg-cover w-80 h-48 justify-items-center mt-24 absolute -z-10"
              style={{ backgroundImage: `url(${Mask1})` }}
            >
              <h3 className="font-fonty font-bold text-lg tracking-small mt-20">
                EARPHONES
              </h3>
              <div className="flex items-center pt-6">
                <p className="btn3">SHOP</p>
                <img src={Path1} className="path1" />
              </div>
            </div>
            <img
              src={sectionImg3}
              alt="earphone1 pic"
              className="w-40 h-40 -z-50"
            />
          </div>
        </div>

        {/* START SECTION TWO */}

        <div
          className="h-big bg-cover relative mt-24"
          style={{ backgroundImage: `url(${Mask2})` }}
        >
          <img src={sectionImg4} className="h-big w-auto absolute ml-4 mt-44" />
          <div className="w-80 h-72 absolute ml-big mt-52">
            <div className="relative">
              <h1 className="font-fonty font-bold text-6xl tracking-small text-kalas5">
                ZX9
                <br />
                SPEAKER
              </h1>
              <p className="font-fonty font-medium text-base text-kalas5 absolute mt-4">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="btn5 absolute mt-28">SEE PRODUCT</button>
            </div>
          </div>
        </div>

        {/* START SECTION THREE */}

        <div
          className="h-80 relative bg-cover mt-24 "
          style={{ backgroundImage: `url(${Mask3})` }}
        >
          <div className="w-52 h-32 ml-24 mt-24 absolute">
            <h1 className="font-fonty text-lg font-bold tracking-small">
              ZX7 SPEAKER
            </h1>
            <button className="btn2 absolute mt-14">SEE PRODUCT</button>
          </div>
        </div>

        {/* START SECTION FOUR */}

        <div className="flex justify-between mt-24">
          <div>
            <img src={sectionImg5} />
          </div>
          <div className="w-big1 h-80 relative bg-kalas2">
            <h3 className="font-fonty font-bold text-xl tracking-small absolute ml-24 mt-24">
              YX1 EARPHONES
            </h3>
            <button className="btn2 absolute ml-24 mt-40">SEE PRODUCT</button>
          </div>
        </div>

        {/* START SECTION FIVE */}

        <div className="h-big1 flex justify-between mt-32">
          <div className="w-big2 h-72 mt-48">
            <h2 className="font-fonty font-bold text-4xl uppercase">
              Bringing you the
              <br />
              <span className="text-kalas">best</span> audio gear
            </h2>
            <p className="font-fonty font-medium text-sm ">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div>
            <img src={sectionImg6} className="w-big1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
