import React, { FC } from 'react';

export interface FeaturesProps {
  heading: string;
  box1: {
    heading: string;
    para: string;
  };
  box2: {
    heading: string;
    para: string;
  };
  box3: {
    heading: string;
    para: string;
  };
}

const Features: FC<FeaturesProps> = ({ heading, box1, box2, box3 }) => {
  return (
    <div>
      <h2 className="text-center text-3xl md:text-5xl font-bold">{heading}</h2>

      <div className="flex text-center md:flex-row flex-col gap-5 pt-5 dark:text-black">
        {/* Box 1 */}
        <div className="max-w-xl bg-white rounded shadow-2xl p-12">
          <h3 className="text-xl md:text-3xl font-semibold text-center mb-4">
            {box1.heading}
          </h3>
          <p>{box1.para}</p>
        </div>

        {/* Box 2 */}
        <div className="max-w-xl bg-white rounded shadow-2xl p-12">
          <h3 className="text-xl md:text-3xl font-semibold text-center mb-4">
            {box2.heading}
          </h3>
          <p>{box2.para}</p>
        </div>

        {/* Box 3 */}
        <div className="max-w-xl bg-white rounded shadow-2xl p-12">
          <h3 className="text-xl md:text-3xl font-semibold text-center mb-4">
            {box3.heading}
          </h3>
          <p>{box3.para}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
