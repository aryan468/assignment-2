import { Text, Heading, Img } from "./..";
import React from "react";

export default function LANDINGPAGEKSHITIZ2Rowfast({
  image = "images/img_vector.svg",
  title = "Fast response time",
  description = "Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex`}>
      <Img src={image} alt="chart image" className="h-[72px] w-[5%] md:w-full" />
      <div className="flex flex-1 flex-col items-start gap-0.5 md:self-stretch">
        <Heading size="s" as="h5" className="uppercase !text-green-900">
          {title}
        </Heading>
        <Text size="lg" as="p" className="w-full capitalize leading-6">
          {description}
        </Text>
      </div>
    </div>
  );
}
