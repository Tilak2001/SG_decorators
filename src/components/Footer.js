import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">

                {/* Need Help Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="flex items-center"><span className="mr-2">💬</span> WhatsApp Us</a></li>
                        <li><a href="#" className="flex items-center"><span className="mr-2">📞</span> Call Us</a></li>
                        <li><a href="#" className="flex items-center"><span className="mr-2">📜</span> Terms & Conditions</a></li>
                        <li><a href="#" className="flex items-center"><span className="mr-2">🔒</span> Privacy Policy</a></li>
                        <li><a href="#" className="flex items-center"><span className="mr-2">💳</span> Payments & Refund Policy</a></li>
                    </ul>
                </div>

                {/* Important Links Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Important Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="flex items-center"><span className="mr-2">🏷️</span> Offers</a></li>
                        <li><a href="#" className="flex items-center"><span className="mr-2">📝</span> Blog</a></li>
                        <li><a href="#" className="flex items-center"><span className="mr-2">ℹ️</span> About Us</a></li>
                        <li><a href="#" className="flex items-center"><span className="mr-2">🎉</span> Wishes & Quotes for Occasions</a></li>
                        <li><a href="#" className="flex items-center"><span className="mr-2">🗺️</span> Sitemap</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
