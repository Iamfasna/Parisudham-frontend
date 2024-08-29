import React, { useEffect, useState } from 'react';
import '../pages/Home.css';
import images from '../images/propic.png';

import agarbhathi from '../images/group agar.png';
import cotton from '../images/cottongroup.png';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

function HomePage() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = (sectionId) => {
    setToggleMenu(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 120,
      once: false,
    });
  }, []);

  const handleShopClick = () => {
    navigate('/shop');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="main">
      <div className="navbar">
        <div className="logo">
          <p>PARISUDHAM COTTON INDUSTRIES</p>
        </div>
        <div className="navbar-menu">
          <button onClick={handleHomeClick}>HOME</button>
          <button onClick={handleShopClick}>SHOP</button>
          <button>CONTACT</button>
        </div>
      </div>
      <div className="small-screen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="MENU">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="links">
              <li><a href="#home" onClick={() => handleMenuClick('home')}>HOME</a></li>
              <li><a href="#shop" onClick={() => handleMenuClick('shop')}>SHOP</a></li>
              <li><a href="#contact" onClick={() => handleMenuClick('contact')}>CONTACT</a></li>
            </ul>
          </div>
        )}
      </div>

      <div id="home" className="first">
        <div className="text-box">
          <h2>Pure like a Dew Drop</h2>
        </div>
        <div className="image-div">
          <img src={images} alt="img1" />
        </div>
      </div>

      <div id="shop" className="product-div">
        <div className="product-box">
          <div className="cotton" data-aos="fade-right">
            <img src={cotton} alt="cot" />
            <p>
              Illuminate your home with our premium cotton lamp wicks, crafted from 100% raw, untreated cotton for a clean and consistent burn. Whether you're using them in traditional oil lamps or for DIY crafts, these versatile wicks deliver reliable performance every time. As one of our best-selling products, they are trusted for their durability and quality. Available in three convenient pack sizes—small for personal use, medium for regular users, and large for those who want the best value—our cotton wicks are the perfect choice for anyone looking to light up their space with natural, eco-friendly materials.
            </p>
          </div>
          <div className="agarbhathi" data-aos="fade-left">
            <img src={agarbhathi} alt="agar" />
            <p>
              Illuminate your home with our premium cotton lamp wicks, crafted from 100% raw, untreated cotton for a clean and consistent burn. Whether you're using them in traditional oil lamps or for DIY crafts, these versatile wicks deliver reliable performance every time. As one of our best-selling products, they are trusted for their durability and quality. Available in three convenient pack sizes—small for personal use, medium for regular users, and large for those who want the best value—our cotton wicks are the perfect choice for anyone looking to light up their space with natural, eco-friendly materials.
            </p>
          </div>
          <div className="cleaning" data-aos="fade-right">
            <img src={agarbhathi} alt="agar" />
            <p>
              Illuminate your home with our premium cotton lamp wicks, crafted from 100% raw, untreated cotton for a clean and consistent burn. Whether you're using them in traditional oil lamps or for DIY crafts, these versatile wicks deliver reliable performance every time. As one of our best-selling products, they are trusted for their durability and quality. Available in three convenient pack sizes—small for personal use, medium for regular users, and large for those who want the best value—our cotton wicks are the perfect choice for anyone looking to light up their space with natural, eco-friendly materials.
            </p>
          </div>
        </div>
      </div>

      <div id="contact" className="about">
        <h2>ABOUT</h2>
        <div className="about-p" data-aos="fade-up">
          <p>Founded in 2007, we are a small yet dedicated Kerala-based startup with a passion for crafting high-quality cotton lamp wicks and fragrant agarbattis. What began as a humble endeavor to supply our meticulously crafted products to Kerala Supplycos has now blossomed into a thriving business, where our most sought-after items are accessible directly to our cherished customers online. With a focus on quality and tradition, we pride ourselves on offering products that enhance your spiritual rituals and everyday moments with the purity of cotton wicks and the soothing aroma of our hand-selected agarbattis.</p>
        </div>
      </div>

      <footer>
        <div className="footer-div">
          <div className="footer-main">
            <div className="logo-foot">
              <p>Parisudham Cotton Industries</p>
            </div>
            <div className="branch">
              <p>Kakkanad, Ernakulam, Kerala
                Parisudham Cotton Industries, C 5224, Kankarapady, Vadakod, Edapaly, Mundakamugal Road, Kakkanad, Ernakulam, Kerala, 682021
              </p>
              <p>Thuravoor, Alappuzha, Kerala
                Parisudham Cotton Industries, Tp/7/135 C, Fathima Foods Building, Thuravoor, Pattanakadu, Valamangalam Road, Thuravoor, Alappuzha, Kerala, 688532
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
