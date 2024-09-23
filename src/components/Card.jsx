import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Array of testimonials with profile images
const testimonials = [
  {
    name: "Robert A. Voltaire",
    title: "Store link",
    review:
      "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    rating: 5,
    image: "assets/cards/robert-voltaire-RIZV7QXV.png"
  },
  {
    name: "Quinten Barney",
    title: "Etsy Merchant",
    review:
      "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
    rating: 5,
    image: "assets/cards/quinten-barney-CHC7B3FG.png"
  },
  {
    name: "Nikki",
    title: "Store link",
    review:
      "Printify has been an amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.",
    rating: 5,
    image: "assets/cards/nikki-TJP4NANB.png"
  },
  {
    name: "Spenders, Brett, and Kyle",
    title: "Store link",
    review:
      "Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.",
    rating: 5,
    image: "assets/cards/spencer-brett-kyle-NLHTAZDT.png"
  },
  {
    name: "April Showers",
    title: "Store link",
    review:
      "I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business.",
    rating: 5,
    image: "assets/cards/april-showers-BCJ7SD2U.jpeg"
  },
];

const starSvg = 'assets/cards/star.svg';

const Card = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsPerPage = 2.5;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const cardContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 15, stiffness: 150, duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'tween', duration: 0.5 },
    },
  };

  return (
    <div>
      <div ref={ref} className="testimonials-section" style={{ background: '#f0f0f0', padding: '50px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 250px', textAlign: 'center' }}>
        <div style={{ width: '50%', textAlign: 'left' }}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            style={{
              fontWeight: 'bold',
              fontSize: '37px',
              lineHeight: '1.2',
              margin: '0',
            }}
          >
            Trusted by over 8M <br /> sellers around the <br /> world
          </motion.div>
        </div>
        <div style={{ width: '50%', textAlign: 'left', marginLeft: '2cm' }}> {/* Adjusted margin */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            style={{
              fontSize: '14px',
              lineHeight: '1.5',
              margin: '10px 0 0 0',
            }}
          >
            Whether you are just getting started or run an <br /> enterprise-level e-commerce business, we do <br />
            everything we can to ensure a positive merchant <br /> experience.
          </motion.div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '90%', maxWidth: '800px', overflow: 'hidden' }}>
          <motion.div
            className="cards-container"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardContainerVariants}
            style={{
              display: 'flex',
              marginTop: '20px',
              cursor: 'grab',
            }}
            onMouseDown={(e) => {
              const startX = e.pageX;
              const handleMouseMove = (moveEvent) => {
                const deltaX = startX - moveEvent.pageX;
                const newIndex = Math.max(0, Math.min(Math.ceil(deltaX / 300), testimonials.length - Math.ceil(cardsPerPage)));
                setActiveIndex(newIndex);
              };
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            <div
              style={{
                display: 'flex',
                transform: `translateX(-${activeIndex * (100 / cardsPerPage)}%)`,
                transition: 'transform 0.3s ease',
                width: `${Math.min(testimonials.length, Math.ceil(cardsPerPage)) * 300}px`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="card"
                  variants={cardContainerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  style={{
                    background: '#fff',
                    padding: '10px',
                    margin: '0 10px',
                    borderRadius: '8px',
                    width: '300px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    height: 'auto',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ width: '60px', height: '60px', borderRadius: '8px', marginLeft: '10px' }}
                    />
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <h3 style={{ fontSize: '16px', marginBottom: '5px', fontWeight: 'bold', marginLeft: '10px' }}>
                        {testimonial.name}
                      </h3>
                      <a href="#" style={{ fontSize: '14px', color: '#28a745', marginLeft: '10px' }}>
                        {testimonial.title}
                      </a>
                    </div>
                  </div>
                  <div style={{ marginLeft: '80px', display: 'flex', alignItems: 'center' }}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <img key={i} src={starSvg} alt="star" style={{ width: '20px', marginRight: '5px' }} />
                      ))}
                    </div>
                  <div style={{ marginTop: '10px', flex: 10, pointerEvents: 'none' }}>
                    <p style={{ fontSize: '14px', color: '#555', textAlign: 'left', margin: 0, userSelect: 'none' }}>
                      {testimonial.review}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pagination Dots */}
          <div className="dots-container" style={{ textAlign: 'center', marginTop: '20px' }}>
            {Array(Math.ceil(testimonials.length / cardsPerPage))
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleDotClick(index)}
                  style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    backgroundColor: activeIndex === index ? '#28a745' : '#ccc',
                    borderRadius: '50%',
                    margin: '0 5px',
                    cursor: 'pointer',
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
