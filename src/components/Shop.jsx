import React from "react";
import { motion, useInView } from "framer-motion";

const Shop = () => {

  const refTextSection = React.useRef(null);
  const refImageSection = React.useRef(null);

  const isTextInView = useInView(refTextSection);
  const isImageInView = useInView(refImageSection);

  return (
    <>
   

      <div className="relative p-5 sm:p-10 bg-gray-100 h-[fit-content]">
           {/* Arrow SVG */}
      <div
        style={{
          background: `url('/assets/shop/arrow-down-S7NHO6CI.svg') no-repeat center center`,
          backgroundSize: 'contain',
          width: '220px',
          height: '40px',
          position: 'absolute', // Set position to absolute
          top: '0', // Align to the top
          left: '50%', // Center horizontally
          transform: 'translateX(-50%)', // Adjust for centering
          zIndex: 10, // Ensure it's above the background but below cards
        }}
      ></div>
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center relative z-10 mt-[5rem] lg:mt-[12rem]">
          {/* Image Section - Sliding in from Left */}
          <motion.div
            ref={refImageSection}
            initial={{ x: "-100%", opacity: 0 }}
            animate={isImageInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative w-full lg:w-1/3 -me-0 lg:-me-16"
          >
            <img
              src="https://printify.com/wp-content/uploads/2023/09/Print-on-Demand-an-Open-Opportunity.jpg"
              alt="Placeholder"
              className="object-cover w-full h-[300px] md:h-[450px] lg:h-[600px] rounded-2xl relative z-20"
              style={{ marginTop: "-4rem", lg: { marginTop: "-8rem" } }}
            />
          </motion.div>

          {/* Text Section - Sliding up from Bottom */}
          <motion.div
            ref={refTextSection}
            initial={{ y: "100%", opacity: 0 }}
            animate={isTextInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex w-full lg:w-2/3 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden h-auto lg:h-[27rem] relative z-10 mt-6 lg:mt-0"
          >
            <div className="w-full p-5 md:p-[4rem] flex flex-col justify-center mx-[1rem] lg:mx-[4rem]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Easily add your design to a wide range of products
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                With our free design tools, you can easily add your custom
                designs to t-shirts, mugs, phone cases, and hundreds of other
                products.
              </p>
              <p className="text-bold text-md lg:text-lg mt-[2rem] text-green-400">
                All Product
              </p>

              {/* Button Section */}
              <div className="flex space-x-4 mt-6">
                <button className="bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition">
                  Start for free
                </button>
                <button className="border border-gray-300 py-3 px-6 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition">
                  <span>▶️</span>
                  <span>How it works?</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Shop;
