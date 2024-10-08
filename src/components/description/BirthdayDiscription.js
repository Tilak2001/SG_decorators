
import React, { useState, useEffect, useRef } from 'react';
import bd1 from './BirthdayDisImage/bd1.jpg';
import bd2 from './BirthdayDisImage/bd2.jpg';
import bd3 from './BirthdayDisImage/bd3.jpg';
import bd4 from './BirthdayDisImage/bd4.jpg';
import image1 from '../../assets/birthday/bd1.jpg';
import image2 from '../../assets/birthday/bd2.jpg';
import image3 from '../../assets/birthday/bd3.jpg';
import image4 from '../../assets/birthday/bd4.jpg';
import image5 from '../../assets/birthday/bd5.jpg';
import CustomNavbar from '../home/navbar/CustomNavbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../home/footer/Footer';

const BirthdayDiscription = () => {
    const [showMoreReviews, setShowMoreReviews] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [pincode, setPincode] = useState('');
    const [error, setError] = useState('');
    const [isImageSticky, setIsImageSticky] = useState(false);
    const [isImageFixed, setIsImageFixed] = useState(false);


    //navbar actions
    const [showNavbar, setShowNavbar] = useState(true);
    let lastScrollY = 0;

    const handleScroll2 = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setShowNavbar(false); // Scrolling down - hide navbar
        } else {
            setShowNavbar(true); // Scrolling up - show navbar
        }

        lastScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll2);
        return () => window.removeEventListener('scroll', handleScroll2);
    }, []);


    //image carousle
    const images = [bd1, bd2, bd3, bd4];
    const reviewsRef = useRef(null);
    const imageRef = useRef(null);

    const handlePincodeChange = (e) => {
        setPincode(e.target.value);
        if (e.target.value.length === 6) {
            setError('');
        } else {
            setError('Please enter a valid 6-digit pincode');
        }
    };

    const handleScroll = () => {
        if (reviewsRef.current && imageRef.current) {
            const reviewTop = reviewsRef.current.getBoundingClientRect().top;

            if (reviewTop < 0) {
                setIsImageSticky(false);
                setIsImageFixed(true); // Fix the image when reviews section is out of view
            } else {
                setIsImageSticky(true); // Set image sticky when reviews come into view
                setIsImageFixed(false); // Unfix the image
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isImageSticky, isImageFixed]);

    return (
        <div>
            <div className={`w-full transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} sticky top-0 left-0 right-0 z-50 bg-white`}>
                <CustomNavbar />
            </div>

            <div className={`flex flex-col md:flex-row p-4 transition-all duration-300 ${showNavbar ? 'pt-16' : 'pt-4'}`}>
                <style>
                    {`
                    .shadow-box {
                        padding: 16px;
                        background-color: white;
                        border-radius: 2px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
                    }
                    .sticky {
                        position: sticky;
                        top: 16px;
                        width: 100%;
                        z-index: 10;
                    }
                    .fixed {
                        position: fixed;
                        top: 16px;
                        width: calc(50% - 32px);
                        z-index: 10;
                    }
                        .navbar-height {
    height: 60px; /* Adjust this value based on your actual navbar height */
}
                `}
                </style>

                {/* Left Side: Image Carousel */}
                <div className="w-full md:w-1/2 shadow-md">
                    <div
                        ref={imageRef}
                        className={`${isImageSticky ? 'sticky' : isImageFixed ? 'relative' : ''}`}
                    >
                        <div className="relative">
                            <img
                                src={images[selectedImage]}
                                alt="Decor Item"
                                className="rounded-lg object-cover w-full h-96 shadow-md"
                            />
                            <div className="absolute inset-0 flex justify-between items-center">
                                <button
                                    onClick={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
                                    className="p-2 bg-white rounded-full shadow-lg"
                                >
                                    &lt;
                                </button>
                                <button
                                    onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
                                    className="p-2 bg-white rounded-full shadow-lg"
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>
                        <div className="flex mt-2 space-x-2">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    onClick={() => setSelectedImage(index)}
                                    alt="Thumbnail"
                                    className={`w-16 h-16 rounded-lg cursor-pointer ${selectedImage === index ? 'ring-2 ring-purple-600' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Product Details */}
                <div className="w-full md:w-1/2 p-4 space-y-4">
                    {/* Product Name and Reviews Box */}
                    <div className="shadow-box">
                        <h1 className="text-2xl font-semibold">
                            Pastel And Rosegold Birthday Decor
                        </h1>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="text-gray-500 text-sm">499 Reviews</span>
                        </div>
                    </div>

                    {/* Price and Booking Box */}
                    <div className="shadow-box">
                        <div className="text-xl text-red-500">
                            ₹2499 <span className="text-gray-400 line-through">₹2799</span>
                        </div>

                        <div className="border rounded-lg p-4 mt-4">
                            <label className="text-sm text-gray-600 block mb-2">Enter Pincode</label>
                            <input
                                type="text"
                                className={`border rounded w-full p-2 ${error ? 'border-red-500' : ''}`}
                                placeholder="Enter Pincode"
                                value={pincode}
                                onChange={handlePincodeChange}
                            />
                            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
                            <div className="mt-4">
                                <label className="text-sm text-gray-600 block mb-2">Select Date & Time</label>
                                <button
                                    className="w-full bg-gray-200 text-gray-500 p-2 rounded"
                                    disabled
                                >
                                    Select Date & Time
                                </button>
                                <div className="text-sm text-gray-500 mt-1">
                                    Our decorator will come and complete the decoration anytime between the selected time range.
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <span className="text-lg font-semibold">Total: ₹2499</span>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                                    BOOK NOW
                                </button>
                            </div>
                        </div>

                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <div className="flex justify-between space-x-6">
                                <div className="flex flex-col items-center space-y-1">
                                    <img src="./SupportImage/image1.png" alt="Secure" className="w-10 h-10" />
                                    <span className="text-sm font-semibold text-gray-700">Secured Transactions</span>
                                </div>
                                <div className="flex flex-col items-center space-y-1">
                                    <img src="./SupportImage/image2.png" alt="Service" className="w-10 h-10" />
                                    <span className="text-sm font-semibold text-gray-700">100% Service Guaranteed</span>
                                </div>
                                <div className="flex flex-col items-center space-y-1">
                                    <img src="./SupportImage/image3.png" alt="Buy Later" className="w-10 h-10" />
                                    <span className="text-sm font-semibold text-gray-700">Buy Now Pay Later</span>
                                </div>
                                <div className="flex flex-col items-center space-y-1">
                                    <img src="./SupportImage/image4.png" alt="Original Photos" className="w-10 h-10" />
                                    <span className="text-sm font-semibold text-gray-700">Original Photos</span>
                                </div>
                                <div className="flex flex-col items-center space-y-1">
                                    <img src="./SupportImage/image5.png" alt="Reviews" className="w-10 h-10" />
                                    <span className="text-sm font-semibold text-gray-700">Original Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Icons Section */}
                    <div className="shadow-box">
                        <h1 className="text-2xl font-semibold">Inclusion</h1>
                        <ul className="list">
                            {/* <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> 1 Rosegold Happy Birthday foil balloon</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> 1 Pack of Themed Paper Tassels</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> Mixed theme balloons of color 1</li> */}
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> 1 Rosegold Happy Birthday foil balloon</li>
                            {/* Add other items */}
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> 1 Pack of Themed Paper Tassels</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> Mixed theme balloons of color 30 peach pastel</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> 2 Heart shape rosegold balloon</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> 2 Balloon Stands</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> 22 Mixed theme balloons for balloon bouquet and free floating</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> Silver Ribbon</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" /> 3 Pixel light</li>
                        </ul>
                    </div>

                    {/* Reviews Section */}
                    <div className="shadow-box">
                        <h2 className="text-xl font-semibold">Reviews</h2>
                        <div>
                            <div className="border p-4 rounded mt-2 shadow-sm">
                                <span className="text-lg font-semibold">John Doe</span>
                                <p className="text-gray-600 mt-1">Amazing decoration! Loved it.</p>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showMoreReviews ? 'max-h-full' : 'max-h-0'}`}>
                                <div className="border p-4 rounded mt-2 shadow-sm">
                                    <span className="text-lg font-semibold">Jane Smith</span>
                                    <p className="text-gray-600 mt-1">Great service, would recommend!</p>
                                </div>
                            </div>
                            <div className="border p-4 rounded mt-2 shadow-sm">
                                <span className="text-lg font-semibold">John Doe</span>
                                <p className="text-gray-600 mt-1">Amazing decoration! Loved it.</p>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showMoreReviews ? 'max-h-full' : 'max-h-0'}`}>
                                <div className="border p-4 rounded mt-2 shadow-sm">
                                    <span className="text-lg font-semibold">Jane Smith</span>
                                    <p className="text-gray-600 mt-1">Great service, would recommend!</p>
                                </div>
                            </div><div className="border p-4 rounded mt-2 shadow-sm">
                                <span className="text-lg font-semibold">John Doe</span>
                                <p className="text-gray-600 mt-1">Amazing decoration! Loved it.</p>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showMoreReviews ? 'max-h-full' : 'max-h-0'}`}>
                                <div className="border p-4 rounded mt-2 shadow-sm">
                                    <span className="text-lg font-semibold">Jane Smith</span>
                                    <p className="text-gray-600 mt-1">Great service, would recommend!</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="text-purple-600 mt-2"
                            onClick={() => setShowMoreReviews(!showMoreReviews)}
                        >
                            {showMoreReviews ? 'Show Less Reviews' : 'Show More Reviews'}
                        </button>
                    </div>
                </div>
            </div>

            {/* why sg decorators */}
            {/*  */}
            <div ref={reviewsRef} className="flex flex-col md:flex-row p-4 gap-8 items-start">
                <div className='w-full md:w-1/2 shadow-box p-4'>
                    <div className='relative'>
                        <h2 className="text-xl font-semibold text-blue-500">Why ❤️ SG Decorators?</h2>
                        <ul className="list-none pl-2 mt-2 text-gray-600 space-y-2">
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-pink-500" />
                                <span><strong className="font-bold">Trusted Platform</strong> - More than 10,000 celebrations every month</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-pink-500" />
                                <span><strong className="font-bold">Professional Team</strong> - Follows all Safety Measures & Sanitisation Requirements</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-pink-500" />
                                <span><strong className="font-bold">Complete Confidence</strong> - Browse all Verified Reviews and Original Photographs</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-pink-500" />
                                <span><strong className="font-bold">100% Refund</strong> - In case of non-availability, a complete refund of total amount is initiated</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Cancellation Policy */}
                <div className='w-full md:w-1/2 shadow-box p-6'>
                    <div className='relative'>
                        <h2 className="text-xl font-semibold text-gray-800">Cancellation Policy</h2>
                        <ul className="list-disc pl-4 mt-2 text-gray-600 space-y-2">
                            <li>More than 24 hours before experience: Cancellation with 90% refund.</li>
                            <li>6 hours to 24 hours before an experience: Cancellation with 50% refund.</li>
                            <li>Less than 6 hours before experience: No cancellation.</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div>

                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-purple-700 mb-4">Similar Products</h2>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                        {/* Card Component */}
                        {[
                            {
                                image: image1,
                                title: "Rosy Whispers Baby Shower",
                                price: "₹3299",
                                rating: "4.6",
                            },
                            {
                                image: image2,
                                title: "Gilded Whispers: A Budget-Friendly",
                                price: "₹2199",
                                rating: "4.6",
                            },
                            {
                                image: image3,
                                title: "Rainbow Delights: A Multicolored",
                                price: "₹6749",
                                rating: "5.0",
                            },
                            {
                                image: image4,
                                title: "Blissful Skies Premium Baby",
                                price: "₹10399",
                                rating: "5.0",
                            },
                            {
                                image: image5,
                                title: "Rosy Whispers Baby Shower",
                                price: "₹3299",
                                rating: "4.6",
                            },
                        ].map((product, index) => (
                            <div className='shodow-box'>
                                <div key={index} className="shadow-box rounded-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-box2xl">
                                    <div className="relative overflow-hidden">
                                        <img className="w-full rounded-lg" src={product.image} alt={product.title} />
                                        <FontAwesomeIcon icon={faHeart} className="absolute top-2 right-2 text-white text-xl" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-semibold">{product.title}</h3>
                                        <p className="text-gray-600">{product.price}</p>
                                        <div className="flex items-center mt-2">
                                            <FontAwesomeIcon icon={faThumbsUp} className="text-pink-500" />
                                            <span className="ml-2 text-pink-500 font-semibold">{product.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="text-right mt-4">
                        <a href="#" className="text-pink-500 font-semibold">View More</a>
                    </div> */}
                </div>


            </div>


            <div>
                <Footer />
            </div>
        </div >
    );
};

export default BirthdayDiscription;
