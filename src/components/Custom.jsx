import React from 'react';
import { motion, useInView } from 'framer-motion';

const slideInVariants = {
  hidden: { opacity: 0, y: 100 }, // Start lower
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: 'spring',
      stiffness: 50,
    },
  }),
};

const Custom = () => {
  const features = [
    {
      title: 'CREATE',
      subtitle: 'custom products',
      description: 'Easily add your designs to a wide range of products using our free tools',
      imgSrc: '/assets/custom/custom-products.png',
    },
    {
      title: 'SELL',
      subtitle: 'on your terms',
      description: 'You choose the products, sale price, and where to sell',
      imgSrc: '/assets/custom/your-products.png',
    },
    {
      title: 'WE HANDLE',
      subtitle: 'fulfillment',
      description: 'Once an order is placed, we automatically handle all the printing and delivery logistics',
      imgSrc: '/assets/custom/fullfillment.png',
    },
  ];

  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 1 }); // Trigger only when fully visible

  return (
    <div
      ref={ref}
      style={{ backgroundColor: '#f0f0f0' }} // Set background color
      className="flex flex-col md:flex-row justify-center items-center space-y-16 md:space-y-0 md:space-x-12 py-24 h-auto md:h-[30rem]"
    >
      {features.map((feature, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center text-center max-w-xs md:max-w-sm p-4"
          custom={i}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'} // Animate when fully visible
          variants={slideInVariants}
        >
          <img src={feature.imgSrc} alt={feature.title} className="w-28 h-28 mb-6" />
          <h3 className="text-lg font-bold text-green-600 mb-2">{feature.title}</h3>
          <h4 className="text-2xl font-bold text-gray-800 mb-3">{feature.subtitle}</h4>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Custom;
