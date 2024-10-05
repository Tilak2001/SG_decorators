import React from 'react';

const Birthday = () => {
  const cards = [
    {
      title: "Successful Seed Round",
      description:
        "We are thrilled to announce the completion of our seed round, securing $2M in investment to fuel product development and market expansion.",
      imageUrl:
        "https://images.unsplash.com/photo-1496436818536-e239445d3327?q=80&w=1200",
    },
    {
      title: "New Office Opening",
      description:
        "Our new office in New York has officially opened! We are excited to grow our team and foster a creative workspace.",
      imageUrl:
        "https://images.unsplash.com/photo-1519500528352-2d14604153d0?q=80&w=1200",
    },
    {
      title: "Team Building Event",
      description:
        "Our latest team-building event was a success! We had a lot of fun and strengthened our bonds.",
      imageUrl:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
    },
    {
      title: "Product Launch",
      description:
        "We are excited to launch our new product line, which is set to revolutionize the market.",
      imageUrl:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200",
    },
    {
      title: "Partnership Announcement",
      description:
        "We are pleased to announce a new partnership with a global leader in the industry.",
      imageUrl:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
    },
    {
      title: "Milestone Achievement",
      description:
        "We’ve reached a significant milestone in our journey, marking another step toward our vision.",
      imageUrl:
        "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1200",
    },
    {
      title: "Customer Success Story",
      description:
        "Our client has achieved incredible success with our solution, and we are thrilled to share their story.",
      imageUrl:
        "https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=1200",
    },
    {
      title: "Award Recognition",
      description:
        "We’ve been recognized with an industry award, and we are honored to receive such recognition.",
      imageUrl:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img
              className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
              src={card.imageUrl}
              alt={card.title}
            />
          </div>
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
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Read article
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Birthday;
