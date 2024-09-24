import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: "Robert A. Voltaire",
    title: "Store link",
    review:
      "Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    rating: 5,
    image: "assets/cards/robert-voltaire-RIZV7QXV.png"
  },
  {
    name: "Quinten Barney",
    title: "Etsy Merchant",
    review:
      "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top-notch, and their platform just keeps getting better and better.",
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
  const cardsPerPage = 2;
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
      <div ref={ref} className="testimonials-section bg-gray-100 py-12">
        <div className="flex flex-col lg:flex-row justify-center items-start lg:px-48 text-center">
          <div className="lg:w-1/2 text-left lg:pr-8 mb-8 lg:mb-0">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              className="font-bold text-3xl leading-tight"
            >
              Trusted by over 8M <br /> sellers around the <br /> world
            </motion.div>
          </div>
          <div className="lg:w-1/2 text-left">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              className="text-sm leading-relaxed mt-2"
            >
              Whether you are just getting started or run an <br />
              enterprise-level e-commerce business, we do <br />
              everything we can to ensure a positive merchant <br />
              experience.
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl overflow-hidden">
            <motion.div
              className="cards-container flex"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardContainerVariants}
              style={{
                marginTop: '20px',
                cursor: 'grab',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  transform: `translateX(-${activeIndex * (100 / cardsPerPage)}%)`,
                  transition: 'transform 0.3s ease',
                  width: `${testimonials.length * 300}px`,  
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="card bg-white p-4 mx-2 rounded-lg shadow-md flex flex-col"
                    variants={cardContainerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    style={{ flexShrink: 0, height: 'auto' }}
                  >
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-md"
                      />
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <a href="#" className="text-sm text-green-500">{testimonial.title}</a>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <img key={i} src={starSvg} alt="star" className="w-5 mr-1" />
                      ))}
                    </div>
                    <p className="mt-2 text-gray-700">{testimonial.review}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="flex justify-center mt-4">
              {Array(Math.ceil(testimonials.length / cardsPerPage))
                .fill()
                .map((_, index) => (
                  <span
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${activeIndex === index ? 'bg-green-500' : 'bg-gray-300'}`}
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
