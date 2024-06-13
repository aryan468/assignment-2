import React from "react";

const sizes = {
  "5xl": "text-[27px] font-normal md:text-[25px] sm:text-[23px]",
  "6xl": "text-[28px] font-normal md:text-[26px] sm:text-2xl",
  xs: "text-[10px] font-medium",
  lg: "text-base font-normal",
  "7xl": "text-4xl font-medium md:text-[34px] sm:text-[32px]",
  "8xl": "text-[47px] font-light md:text-[43px] sm:text-[37px]",
  s: "text-xs font-normal",
  "2xl": "text-xl font-normal",
  "3xl": "text-[22px] font-normal",
  "4xl": "text-[26px] font-light md:text-2xl sm:text-[22px]",
  xl: "text-[17px] font-normal",
  md: "text-sm font-medium",
};

const Text = ({ children, className = "", as, size = "2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}

    </Component>
  );
};

export { Text };
