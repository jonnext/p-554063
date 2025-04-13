import React from "react";

interface FeatureItemProps {
  icon: string;
  text: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  return (
    <div className="self-stretch flex items-center gap-3.5 my-auto">
      <img
        src={icon}
        className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
        alt="Feature icon"
      />
      <div className="self-stretch my-auto">{text}</div>
    </div>
  );
};
