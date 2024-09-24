import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Tshirt = () => {
    const pros = [
        "100% Free to use",
        "900+ High-Quality Products",
        "Largest global print network"
    ];

    const images = [
        '/assets/Tshirt/img_0.png',
        '/assets/Tshirt/img_1.png',
        '/assets/Tshirt/img_2.png',
        '/assets/Tshirt/img_3.png',
        '/assets/Tshirt/img_4.png'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="sm:mt-9 mt-0 min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center px-4 bg-cover bg-no-repeat" 
            style={{ backgroundImage: "url('/assets/Tshirt/background-IAMAETLT.svg')" }}
        >
            <div className="flex items-center justify-between w-full p-14 relative z-10">
                {/* Left Section */}
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mb-6 text-black">Create and sell custom products</h1>
                    {pros.map((item, index) => (
                        <p key={index} className="flex items-center text-lg font-semibold text-black mb-2">
                            <img src="/assets/Tshirt/tick.svg" alt="Tick" className="w-6 h-6 mr-2" /> {item}
                        </p>
                    ))}
                    <div className="flex space-x-4 mt-12">
                        <Button classValue="bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition" text={'Start for free'} />
                        <Button classValue="border border-gray-500 py-3 px-6 rounded-lg flex items-center space-x-2 transition hover:bg-gray-100" imgSrc="/assets/Tshirt/play.svg" text={'How it works?'} />
                    </div>
                    <p className="text-green-500 mt-4">Trusted by over 8M sellers around the world</p>
                </div>

                <div className="relative h-full">
                    <img 
                        className="absolute w-32 md:w-48 lg:w-56" 
                        style={{ top: '10%', right: '45%' }}
                        src="/assets/Tshirt/img_5.png" 
                        alt="Overlay" 
                    />

                    <motion.img 
                        className="absolute" 
                        style={{ 
                            top: '3%', 
                            right: '0px', 
                            left: '20px',
                            width: '450px', // Set a specific width
                            height: 'auto', // Maintain aspect ratio
                            filter: 'brightness(8) invert(1)' // Make it darker
                        }} 
                        src="/assets/Tshirt/qr.svg" 
                        alt="qr" 
                        initial={{ x: 100, scale: 0, opacity: 0 }} // Start off-screen and scaled down
                        animate={{ 
                            x: 0, // Slide in
                            scale: 1.1, // Zoom in
                            opacity: 1 // Fade in
                        }} 
                        exit={{ 
                            x: 100, // Slide out to the right
                            scale: 0, // Scale down
                            opacity: 0 // Fade out
                        }} 
                        transition={{ duration: 0.5, type: 'spring', stiffness: 300 }} 
                    />


                    <img className="hidden md:block h-full" src="/assets/Tshirt/women.svg" alt="Hero" />

                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Overlay ${index}`}
                            className={`absolute w-20 md:w-20 lg:w-20`} 
                            initial={{ x: 100, opacity: 0 }} 
                            animate={{
                                x: 0,
                                opacity: index === currentImageIndex ? 1 : 0,
                                scale: index === currentImageIndex ? 1 : 0.9,
                            }}
                            exit={{ x: 100, opacity: 0 }} 
                            transition={{ duration: 1 }} 
                            style={{
                                display: index === currentImageIndex ? 'block' : 'none', 
                                top: '20%', 
                                right: '60%' 
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tshirt;
