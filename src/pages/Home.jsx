import React, { useEffect, useState } from 'react';
import '../pages/Home.css';
import images from '../images/img1.jpeg';
import agarbhathi from '../images/group agar.png'; // Updated to avoid spaces
import cotton from '../images/cottongroup.png';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiHamburgerMenu } from 'react-icons/gi';

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
      once: true, // Ensures animation only happens once
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
          <button onClick={() => handleMenuClick('contact')}>CONTACT</button>
        </div>
      </div>
      <div className="small-screen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
       <div className="MENU">
       <span className="material-icons overlay__close" onClick={() => setToggleMenu(false)}>
         close
       </span>
       <ul className="links">
         <li><a href="#home">Home</a></li>
         <li><a href="#shop">Shop</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>
     </div>
     
        )}
      </div>

      <div id="home" className="first">
        <div className="text-box">
          <h2>Pure like a Dew Drop</h2>
        </div>
        <div className="image-div">
          <img src={images} alt="Cotton Product" />
        </div>
      </div>

      <div id="shop" className="product-div">
        <div className="product-box">
          <div className="product-item cotton" data-aos="fade-right">
            <img src={cotton} alt="Cotton Product" />
            <p>
              Illuminate your home with our premium cotton lamp wicks, crafted from 100% raw, untreated cotton for a clean and consistent burn. Available in three pack sizes—small, medium, and large—our cotton wicks are trusted for their durability and quality.
            </p>
          </div>
          <div className="product-item agarbhathi" data-aos="fade-left">
            <img src={agarbhathi} alt="Agarbathi Product" />
            <p>
              Our fragrant agarbathis are perfect for spiritual and everyday moments. Hand-selected and made from natural ingredients, they are available in a variety of soothing scents.
            </p>
          </div>
          <div className="product-item agarbhathi" data-aos="fade-left">
            <img src={agarbhathi} alt="Agarbathi Product" />
            <p>
              Our fragrant agarbathis are perfect for spiritual and everyday moments. Hand-selected and made from natural ingredients, they are available in a variety of soothing scents.
            </p>
          </div>
        </div>
      </div>

      <div id="contact" className="about">
        <h2>ABOUT</h2>
        <div className="about-p" data-aos="fade-up">
          <p>
            Founded in 2007, we are a Kerala-based startup with a passion for crafting high-quality cotton lamp wicks and fragrant agarbattis. With a focus on quality and tradition, we offer products that enhance your spiritual rituals and everyday moments.
          </p>
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
                <br />Parisudham Cotton Industries, C 5224, Kankarapady, Vadakod, Edapaly, Mundakamugal Road, Kakkanad, Ernakulam, Kerala, 682021
              </p>
              <p>Thuravoor, Alappuzha, Kerala
                <br />Parisudham Cotton Industries, Tp/7/135 C, Fathima Foods Building, Thuravoor, Alappuzha, Kerala, 688532
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
