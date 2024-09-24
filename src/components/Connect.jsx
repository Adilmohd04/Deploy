import React, { useEffect, useState, useRef } from 'react';

// Example SVG paths for each platform
const svgPaths = {
  Etsy: '/assets/connect/etsy-MXXFYORZ.svg',
  Shopify: '/assets/connect/shopify-3NAPXPBF.svg',
  Squarespace: '/assets/connect/squarespace-FIBF2RIF.svg',
  Wix: '/assets/connect/wix-MWZCZDTE.svg',
  API: '/assets/connect/api.png',
  BigCommerce: '/assets/connect/big-commerce-EGSGKPYX.svg',
  PrestaShop: '/assets/connect/presta-54F6AYUU.svg',
  WooCommerce: '/assets/connect/woo-PGFAG65X.svg',
  MoreIntegrations: '/assets/connect/more-integration-4S3FHLQZ.svg',
  Amazon: '/assets/connect/printify-E3TBSF5R.svg',
};

const cardOffsets = {
  Etsy: { x: 200, y: -100 },
  Shopify: { x: -200, y: 100 },
  Squarespace: { x: 90, y: 240 },
  Wix: { x: -150, y: -150 },
  BigCommerce: { x: 450, y: 120 },
  PrestaShop: { x: 320, y: 10 },
  WooCommerce: { x: 500, y: -200 },
  MoreIntegrations: { x: -95, y: 200 },
  API: { x: -410, y: 120 },
  Amazon: { x: 30, y: -30 },
};

const Connect = () => {
  const platforms = Object.keys(svgPaths);
  const [animate, setAnimate] = useState(false);
  const connectRef = useRef(null); 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setAnimate(true), 100);
        }
      },
      { threshold: 0.5 } 
    );

    if (connectRef.current) {
      observer.observe(connectRef.current);
    }

    return () => {
      if (connectRef.current) {
        observer.unobserve(connectRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={connectRef} 
      style={{
        position: 'relative',
        padding: '40px',
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', 
      }}
    >
    
      <div
        style={{
          background: `url('/assets/connect/arrow-down-S7NHO6CI.svg') no-repeat center center`,
          backgroundSize: 'contain',
          width: '220px',
          height: '40px',
          position: 'absolute', 
          top: '0', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 1, 
        }}
      />

      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          color: '#333',
          width: '100%',
          maxWidth: '700px',
          marginTop: '20px',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Connect your store</h2>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Printify easily integrates with
          <br />
          major e-commerce platforms and marketplaces.
        </p>
      </div>

      <div
        className="platforms-section"
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg
          fill="none"
          height="430"
          width="977"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            top: '50px',
            left: 'calc(50% - 488px)',
            zIndex: 0, 
          }}
        >
          <path
            d="m511.5 136.1s101.824-157.068 207.839-102.3c106.014 54.768-242.6 124.246-67.855 19.73 174.745-104.517 324.914-19.851 324.914-19.851m-482.398 145.821c-167 0-516.194 6.994-370-70.5 133-70.5-46.45 241.054-46.45 241.054m477.087-186.311s174.379-48.728 239.745 31.819m-432.882-143.062c48.167-9.667 144.5-1.8 144.5 107m153.904-58.562c-40.465-9.568-125.691-26.973-83.453-47.415 38.425-18.597-32.451 86.98-32.451 86.98m-152 229.497c-5-49 6-61 47-57s72-42 60-77c-6.171-18 3.333-51 17-59m-4.158-9s-122.488 123.843-118.514 68.254c3.973-55.588-92.646 34.012-92.646 34.012zm10.234 14.071s234.835 143.342 158.677 26.387c-35.068-45.952-115.681 221.185-115.681 221.185zm0 30.353s237.32 147.2 415.754 116.919z"
            stroke="#4B8F8F"
          />
        </svg>

        {platforms.map((platform) => {
          if (platform === 'Amazon') return null; 

          const { x = 0, y = 0 } = cardOffsets[platform] || {}; 
          return (
            <div
              key={platform}
              style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                transform: animate
                  ? `translate(${x}px, ${y}px)` 
                  : 'translate(0px, 0px)',
                transition: 'transform 1s ease-in-out',
                zIndex: 2,
                cursor: 'pointer', 
              }}
             
              onMouseEnter={(e) => (e.currentTarget.style.transform += ' scale(1.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = animate
                ? `translate(${x}px, ${y}px)` 
                : 'translate(0px, 0px)')}
            >
              <img
                src={svgPaths[platform]}
                alt={platform}
                style={{ width: '40px', height: '40px' }}
              />
            </div>
          );
        })}

        
        {(() => {
          const { x, y } = cardOffsets['Amazon']; 
          return (
            <div
              style={{
                position: 'absolute',
                width: '100px',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4CAF50',
                borderRadius: '12px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                zIndex: 3,
                transform: `translate(${x}px, ${y}px)`, 
                cursor: 'pointer', 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform += ' scale(1.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = `translate(${x}px, ${y}px)`)}
            >
              <img
                src={svgPaths['Amazon']}
                alt="Main Card"
                style={{ width: '50px', height: '50px' }}
              />
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default Connect;
