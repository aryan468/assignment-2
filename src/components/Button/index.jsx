import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[7px]",
};
const variants = {
  fill: {
    green_900: "bg-green-900",
    white_A700: "bg-white-A700 shadow-2xl text-gray-500",
    light_green_800: "bg-light_green-800 text-white-A700",
  },
};
const sizes = {
  xs: "h-[42px] px-[35px] text-[22px]",
  lg: "h-[52px] px-[7px]",
  sm: "h-[42px] px-8 text-[19px]",
  md: "h-[49px] px-[22px] text-[26px]",
  xl: "h-[72px] px-[35px] text-[32px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "light_green_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "lg", "sm", "md", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["green_900", "white_A700", "light_green_800"]),
};

export { Button };
