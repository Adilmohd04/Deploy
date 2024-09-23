import React from 'react';

const Last = () => {
  const sections = [
    {
      title: 'Integrations',
      links: [
        'Shopify', 'Etsy', 'eBay', 'Amazon', 'TikTok Shop', 'PrestaShop', 'BigCommerce',
        'Wix', 'WooCommerce', 'Squarespace', 'Printify API', 'Printify Pop-Up Store', 'Shutterstock',
      ],
    },
    {
      title: 'Discover',
      links: [
        'Blog', 'Guides', 'Products', 'Etsy print-on-demand', 'Shopify print-on-demand',
        'Woocommerce print-on-demand', 'Wix print-on-demand', 'Squarespace print-on-demand',
        'Make Your Own Shirt', 'Brands', 'Pricing', 'Shipping Rates', 'Mockup Generator',
      ],
    },
    {
      title: 'Start selling',
      links: [
        'Custom T-shirts', 'Custom Hoodies', 'Custom Mugs', 'Custom Socks', 'Custom Backpacks',
        'Custom Branding', 'Sell on Etsy', 'Sell on Social Media', 'Free T-shirt Designs', 'Custom Products',
        'Custom All-Over-Print Hoodies', 'Start a Clothing Line', 'Start POD Business', 'Bulk Orders',
        'Transfering To Printify',
      ],
    },
    {
      title: 'Printify',
      links: [
        'Print on Demand', 'Print Providers', 'Experts Program', 'Printify Express Delivery',
        'Become a Partner', 'About', 'Printify Quality Promise', 'Jobs', 'Webinars', 'Printing Profits Podcast',
        'Contact Us', 'Affiliate', 'Contact Sales', 'POD Glossary', 'Network Fulfillment Status',
        'Merchant Protection', 'Security', 'Sitemap',
      ],
    },
  ];

  return (
    <div className="bg py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <img src="/assets/logo-full.svg" alt="Printify Logo" className="h-10" />
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/last/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/last/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/last/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/last/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/last/Tiktok-1.svg" alt="TikTok" className="w-6 h-6" />
            </a>
            <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/last/reddit-icon.svg" alt="Reddit" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i} className="text-sm hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Last;
