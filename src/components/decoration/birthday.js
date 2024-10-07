// import React from 'react';
// import CustomNavbar from '../home/navbar/CustomNavbar'; // Import CustomNavbar
// import Footer from '../home/footer/Footer';

// // Import your local images
// import image1 from '../../assets/birthday/bd1.jpg';
// import image2 from '../../assets/birthday/bd2.jpg';
// import image3 from '../../assets/birthday/bd3.jpg';
// import image4 from '../../assets/birthday/bd4.jpg';
// import image5 from '../../assets/birthday/bd5.jpg';
// import image6 from '../../assets/birthday/bd1.jpg';

// // Add more imports for the rest of your images

// const Birthday = () => {
//   const cards = [
//     {
//       title: "Successful Seed Round",
//       description:
//         "We are thrilled to announce the completion of our seed round, securing $2M in investment to fuel product development and market expansion.",
//       imageUrl: image1, // Use the imported image
//     },
//     {
//       title: "New Office Opening",
//       description:
//         "Our new office in New York has officially opened! We are excited to grow our team and foster a creative workspace.",
//       imageUrl: image2, // Use the imported image
//     },
//     {
//       title: "Team Building Event",
//       description:
//         "Our latest team-building event was a success! We had a lot of fun and strengthened our bonds.",
//       imageUrl: image3, // Use the imported image
//     },

//     {
//       title: "New Office Opening",
//       description:
//         "Our new office in New York has officially opened! We are excited to grow our team and foster a creative workspace.",
//       imageUrl: image4, // Use the imported image
//     },
//     {
//       title: "New Office Opening",
//       description:
//         "Our new office in New York has officially opened! We are excited to grow our team and foster a creative workspace.",
//       imageUrl: image5, // Use the imported image
//     },

//     {
//       title: "New Office Opening",
//       description:
//         "Our new office in New York has officially opened! We are excited to grow our team and foster a creative workspace.",
//       imageUrl: image6, // Use the imported image
//     },
//     // Continue adding more cards with local images as needed
//   ];

//   return (
//     <div>
//       {/* Include CustomNavbar */}
//       <CustomNavbar />

//       {/* Birthday Cards */}
//       <div className="flex flex-wrap justify-center gap-6 py-6">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300"
//           >
//             <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
//               <img
//                 className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
//                 src={card.imageUrl} // Use the local image here
//                 alt={card.title}
//               />
//             </div>
//             <div className="p-4">
//               <h6 className="mb-2 text-slate-800 text-xl font-semibold">
//                 {card.title}
//               </h6>
//               <p className="text-slate-600 leading-normal font-light">
//                 {card.description}
//               </p>
//             </div>
//             <div className="px-4 pb-4 pt-0 mt-2">
//               <button
//                 className="rounded-md text-white py-2 px-4 border border-transparent text-center text-sm bg-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 Price
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Birthday;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import CustomNavbar from '../home/navbar/CustomNavbar'; // Import CustomNavbar
import Footer from '../home/footer/Footer';

// Import your local images
import image1 from '../../assets/birthday/bd1.jpg';
import image2 from '../../assets/birthday/bd2.jpg';
import image3 from '../../assets/birthday/bd3.jpg';
import image4 from '../../assets/birthday/bd4.jpg';
import image5 from '../../assets/birthday/bd5.jpg';
import image6 from '../../assets/birthday/bd1.jpg';
import BirthdayDiscription from '../description/BirthdayDiscription'; // Import BirthdayDiscription

const Birthday = () => {
  const cards = [
    {
      title: "Successful Seed Round",
      description:
        "We are thrilled to announce the completion of our seed round, securing $2M in investment to fuel product development and market expansion.",
      imageUrl: image1, // Use the imported image
    },
    {
      title: "New Office Opening",
      description:
        "Our new office in New York has officially opened! We are excited to grow our team and foster a creative workspace.",
      imageUrl: image2, // Use the imported image
    },
    {
      title: "Team Building Event",
      description:
        "Our latest team-building event was a success! We had a lot of fun and strengthened our bonds.",
      imageUrl: image3, // Use the imported image
    },
    {
      title: "New Office Opening",
      description:
        "Our new office in New York has officially opened! We are excited to grow our team and foster a creative workspace.",
      imageUrl: image4, // Use the imported image
    },
    {
      title: "New Office Opening",
      description:
        "Our new office in New York has officially opened! We are excited to grow our team and foster a creative workspace.",
      imageUrl: image5, // Use the imported image
    },
    {
      title: "New Office Opening",
      description:
        "Our new office in New York has officially opened! We are excited to grow our team and foster a creative workspace.",
      imageUrl: image6, // Use the imported image
    },
    // Continue adding more cards with local images as needed
  ];

  return (
    <div>
      {/* Include CustomNavbar */}
      <CustomNavbar />

      {/* Birthday Cards */}
      <div className="flex flex-wrap justify-center gap-6 py-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300"
          >
            <Link to="/birthday-description"> {/* Wrap the image in a Link */}
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src={card.imageUrl} // Use the local image here
                  alt={card.title}
                />
              </div>
            </Link>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {card.title}
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                {card.description}
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button
                className="rounded-md text-white py-2 px-4 border border-transparent text-center text-sm bg-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Price
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Birthday;
