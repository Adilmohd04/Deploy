import React from 'react';
import { MdOutlinePlayCircleOutline } from 'react-icons/md';
import Button from './Button';

const Tshirt = () => {
    const pros = [
        "100% Free to use",
        "900+ High-Quality Products",
        "Largest global print network"
    ];

    return (
        <section className="mt-12 min-h-screen flex items-end justify-center px-4 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/Tshirt/background-IAMAETLT.svg')" }}>
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
                        <Button classValue="border border-gray-500 py-3 px-6 rounded-lg flex items-center space-x-2 transition hover:bg-gray-100" Icon={MdOutlinePlayCircleOutline} text={'How it works?'} />
                    </div>
                    <p className="text-green-500 mt-4">Trusted by over 8M sellers around the world</p>
                </div>

                <img className="hidden md:block h-full" src="assets/Tshirt/women.svg" alt="Hero" />
            </div>
        </section>
    );
};

export default Tshirt;
