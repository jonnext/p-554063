import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="self-stretch flex w-full flex-col items-center justify-center py-12 max-md:max-w-full">
      <div className="w-full max-w-screen-xl px-8 max-md:max-w-full max-md:px-5">
        <div className="flex w-full items-center gap-[24px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="text-[#717680] text-base font-normal self-stretch my-auto">
            © 2024 Sona Speech Therapy. All rights reserved.
          </div>
          <div className="self-stretch flex items-center gap-6 my-auto">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/c0874b65af1131aec5bece5ca1598a97ad4a4494?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                alt="Facebook icon"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="self-stretch flex w-6 shrink-0 h-6 my-auto"
            ></a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="self-stretch flex w-6 shrink-0 h-6 my-auto"
            ></a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="self-stretch flex w-6 shrink-0 h-6 my-auto"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
