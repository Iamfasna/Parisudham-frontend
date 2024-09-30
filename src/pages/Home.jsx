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

  // const handleMenuClick = (sectionId) => {
  //   setToggleMenu(false);
  //   document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  // };

  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 120,
      once: true, 
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
          <p href="/">PARISUDHAM COTTON INDUSTRIES</p>
        </div>
        <div className="navbar-menu">
          <button onClick={handleHomeClick}>HOME</button>
          <button onClick={handleShopClick}>SHOP</button>
          
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
       </ul>
     </div>
     
        )}
      </div>

      <div id="home" className="first">
          <div className="image-div">
            <img src={images} alt="Cotton Product" />
          </div>
          <div className="text-box">
            <h2>Pure like a Dew Drop</h2>
          </div>
      </div>


      <div id="shop" className="product-div">
        <div className="product-box">
          <div className="product-item cotton" data-aos="fade-right">
            <img src={cotton} alt="Cotton Product" />
            <p>
              
                    Illuminate your home with our premium cotton lamp wicks, crafted from 100% raw, untreated cotton for a clean, consistent burn. These wicks are designed for durability and trusted to provide a steady, soot-free flame, making them perfect for both daily rituals and special occasions. Available in three pack sizes—small, medium, and large—our cotton wicks cater to every need, from lighting a single lamp to preparing for larger gatherings. With their natural purity and long-lasting performance, they bring warmth and elegance into your space, enhancing the ambiance with a touch of tradition and quality.
            </p>
          </div>
          <div className="product-item agarbhathi" data-aos="fade-left">
            <img src={agarbhathi} alt="Agarbathi Product" />
            <p>
            Our fragrant agarbathis are crafted to enhance both spiritual and everyday moments with a sense of calm and serenity. Made from hand-selected, natural ingredients, these incense sticks offer a clean, long-lasting burn and are available in a variety of soothing scents. Choose from four unique fragrances: Fantazia, a blend of exotic, uplifting notes; Fermenich, a refreshing and vibrant aroma; Vignesh, a warm, earthy fragrance; and Dharma, an essence of tranquility and balance. Perfect for meditation, rituals, or simply creating a peaceful ambiance at home.
            </p>
          </div>
          <div className="product-item agarbhathi" data-aos="fade-left">
            <img src={agarbhathi} alt="Agarbathi Product" />
            <p>
            We also offer a range of cleaning items designed to keep your home fresh and spotless, including hand wash, dishwash, toilet cleaner, and bleaching powder. Our hand wash is crafted from natural ingredients, ensuring a gentle and soothing experience for your skin while effectively removing dirt and bacteria. The dishwash is powerful yet safe, formulated to cut through grease and grime without harming your dishes or utensils. Our toilet cleaner effectively tackles tough stains and odors, using eco-friendly ingredients to leave your toilet sparkling clean and fresh. Lastly, our handmade bleaching powder serves as a versatile cleaning agent, ideal for whitening laundry and disinfecting surfaces. 
            </p>
          </div>
        </div>
      </div>

      <div id="contact" className="about">
        <h2>ABOUT</h2>
        <div className="about-p" data-aos="fade-up">
          <p>
          Founded in 2007, we are a Kerala-based startup dedicated to crafting high-quality cotton lamp wicks and fragrant agarbattis. With a strong focus on quality and tradition, our products are designed to enhance both your spiritual rituals and everyday moments, bringing warmth and serenity into your life. As an ISO 9001:2015 Certified company, we prioritize excellence in every aspect of our manufacturing process, ensuring that each product meets the highest standards of quality and safety. Our commitment to using natural ingredients and sustainable practices reflects our passion for creating items that not only elevate your experience but also respect the environment.
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
              <p>Contact No: 9388629926 , 8301987359</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
