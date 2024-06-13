import React from "react";

const sizes = {
  "3xl": "text-[41px] font-semibold md:text-[37px] sm:text-[31px]",
  "2xl": "text-4xl font-extrabold md:text-[34px] sm:text-[32px]",
  "5xl": "text-6xl font-extrabold md:text-[52px] sm:text-[46px]",
  xl: "text-[29px] font-extrabold md:text-[27px] sm:text-[25px]",
  "4xl": "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  "6xl": "text-[64px] font-semibold md:text-5xl",
  s: "text-xl font-semibold",
  md: "text-[23px] font-extrabold md:text-[21px]",
  xs: "text-sm font-bold",
  lg: "text-[26px] font-bold md:text-2xl sm:text-[22px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-700 font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
