import { Text, Img, Input } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex items-start bg-black-900`}>
      <div className="container-xs mb-2.5 flex px-[478px] md:p-5 md:px-5">
        <div className="flex w-full flex-col items-center gap-3">
          <Img src="images/img_footer_logo.png" alt="footer logo" className="h-[50px] w-[143px] object-contain" />
          <ul className="flex flex-wrap gap-[26px] self-start">
            <li>
              <a href="Home" target="_blank" rel="noreferrer">
                <Text size="s" as="p" className="!text-white-A700">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a href="About" target="_blank" rel="noreferrer">
                <Text size="s" as="p" className="!text-white-A700">
                  About
                </Text>
              </a>
            </li>
            <li>
              <a href="Services" target="_blank" rel="noreferrer">
                <Text size="s" as="p" className="!text-white-A700">
                  Services
                </Text>
              </a>
            </li>
            <li>
              <a href="News" target="_blank" rel="noreferrer">
                <Text size="s" as="p" className="!text-white-A700">
                  News
                </Text>
              </a>
            </li>
            <li>
              <a href="Contact" target="_blank" rel="noreferrer">
                <Text size="s" as="p" className="!text-white-A700">
                  Contact
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="s" as="p" className="!text-white-A700">
                  Privacy Policy
                </Text>
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 self-stretch sm:flex-col">
            <Text size="md" as="p" className="!text-white-A700">
              Newsletter
            </Text>
            <div className="flex flex-1 sm:self-stretch">
              <Input shape="round" name="Email Input" placeholder={`Email`} />
              <div className="relative ml-[-23px] flex w-[25%] justify-center rounded-br-[12px] rounded-tr-[12px] border border-solid border-white-A700 bg-black-900 p-1.5 shadow-xs">
                <Img src="images/img_arrow_right.svg" alt="arrow image" className="h-[12px]" />
              </div>
            </div>
          </div>
          <Text size="xs" as="p" className="text-shadow-ts !text-white-A700">
            All Copyrights are reserved by RIDE EVEE
          </Text>
        </div>
      </div>
    </footer>
  );
}
