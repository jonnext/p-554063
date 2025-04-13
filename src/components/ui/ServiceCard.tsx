import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-neutral-50 border self-stretch flex min-h-[368px] min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto p-10 rounded-[32px] border-[rgba(227,233,233,1)] border-solid max-md:px-5">
      <img
        src={icon}
        className="aspect-[1] object-contain w-12 shadow-[0px_0px_0px_1px_var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border,rgba(10,13,18,0.18))_inset,0px_-2px_0px_0px_var(--Colors-Effects-Shadows-shadow-skeumorphic-inner,rgba(10,13,18,0.05))_inset,0px_1px_2px_0px_var(--Colors-Effects-Shadows-shadow-xs,rgba(10,13,18,0.05))] self-center"
        alt={`${title} icon`}
      />
      <h3 className="font-medium mt-4 text-center">{title}</h3>
      <p className="font-normal mt-4 text-center">{description}</p>
    </div>
  );
};
