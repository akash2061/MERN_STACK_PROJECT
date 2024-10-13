import React, { useEffect, useState } from 'react';
import a1 from '../assets/catagory/1.png';
import a2 from '../assets/catagory/2.png';
import a3 from '../assets/catagory/3.png';
import a4 from '../assets/catagory/4.png';
import a5 from '../assets/catagory/5.png';
import a6 from '../assets/catagory/6.png';
import a7 from '../assets/catagory/7.png';
import a8 from '../assets/catagory/8.png';
import a9 from '../assets/catagory/9.png';
import a10 from '../assets/catagory/10.png';
import a11 from '../assets/catagory/11.png';
import a12 from '../assets/catagory/12.png';
import a13 from '../assets/catagory/13.png';
import a14 from '../assets/catagory/14.png';
import a15 from '../assets/catagory/15.png';

// Array of logo URLs
const logos = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
];

const Category = () => {
  const [animationDuration, setAnimationDuration] = useState('20s');

  useEffect(() => {
    const updateAnimationSpeed = () => {
      const width = window.innerWidth;
      setAnimationDuration(width <= 768 ? '10s' : '20s');
    };

    updateAnimationSpeed(); // Initial check
    window.addEventListener('resize', updateAnimationSpeed); // Update on resize

    return () => {
      window.removeEventListener('resize', updateAnimationSpeed); // Clean up on unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-transparent py-8">
      <div className="overflow-hidden w-full">
        <div className="flex animate-marquee whitespace-nowrap" style={{ animationDuration }}>
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 mx-4">
              <img src={logo} alt={`Logo ${index + 1}`} className="object-contain h-24" />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="flex-shrink-0 w-32 mx-4">
              <img src={logo} alt={`Logo ${index + 1}`} className="object-contain h-24" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee linear infinite;
          width: calc(100% * 2); /* Two times the total width for continuous effect */
        }
      `}</style>
    </div>
  );
}

export default Category;
