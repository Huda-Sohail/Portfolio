import React from 'react';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card"data-aos="zoom-in">
      <img src={img} alt={title} className="w-full h-auto" />
      <h3>{title}</h3>
      <p>{desc}</p>

      {/* Tags container */}
      <div className="tags flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`tag px-4 py-2 rounded-full text-xs text-white ${getTagColorClass(index)}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const getTagColorClass = (index: number) => {
  switch (index) {
    case 0:
      return 'bg-[#0abde3]'; // First tag background color
    case 1:
      return 'bg-[#a55eea]'; // Second tag background color
    case 2:
      return 'bg-[#db9f10]'; // Third tag background color
    case 3:
      return 'bg-[#eb4d4b]'; // Fourth tag background color
    default:
      return 'bg-gray-500'; // Default background color for any additional tags
  }
};

export default Card;




