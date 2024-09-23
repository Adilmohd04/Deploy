import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const WaterPlant = () => {
  const isMobile = window.innerWidth < 768;

  const containerVariant = {
    hidden: {
      x: 500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariant = {
    hidden: {
      y: 500,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="flex items-end relative mx-[calc(3rem+40px)] my-[250px] min-h-[fit-content]">
      <motion.div
        className="bg-[#203641] w-full h-[90%] rounded-[25px] flex flex-col justify-between items-start p-[50px_90px] text-white"
        variants={!isMobile ? containerVariant : {}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-[40px] mb-[20px]">Make Money, Risk-Free</h1>
        <p className="leading-[24px] mb-[20px]">
          You pay for fulfillment only when you make a sale
        </p>
        <motion.div
          variants={!isMobile ? childVariant : {}}
          className="w-[383px] h-[240px] bg-[#17262b] rounded-[25px] p-[50px] flex flex-col justify-between"
        >
          <p className="flex justify-between">
            You sell a t-shirt <span>$ 30</span>
          </p>
          <p className="flex justify-between">
            You pay for its production <span>$ 12</span>
          </p>
          <h3 className="pt-[25px] text-[20px] text-[#38b75c] border-t border-gray-400 flex justify-between">
            Your profit <span>$ 18</span>
          </h3>
        </motion.div>
        <br/>
        <Button
          style={{ backgroundColor: '#38b75c', color: 'white' }}
          text={'Start selling'}
        />
        <br/>

        <p className="text-[14px] text-gray-400">100% Free to use · 900+ Products · Largest print network</p>
      </motion.div>
      <img
        src="assets/water.svg"
        alt="WaterPlant"
        className="absolute bottom-0 right-0 w-[50%] max-h-[775px] hidden lg:block"
      />
    </div>
  );
};

export default WaterPlant;
