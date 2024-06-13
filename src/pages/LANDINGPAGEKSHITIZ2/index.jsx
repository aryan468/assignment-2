import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, DatePicker } from "../../components";
import Footer from "../../components/Footer";
import LANDINGPAGEKSHITIZ2Rowfast from "../../components/LANDINGPAGEKSHITIZ2Rowfast";
import React, { Suspense } from "react";

const data = [
  {},
  {
    image: "images/img_search.svg",
    title: "Vast fleet",
    description:
      "We have all kinds of Car on Rent available like Sedan, Suv, Muv, Premium Sedan, Tampo Traveller etc as per ur requirement",
  },
  {
    image: "images/img_minimize.svg",
    title: "Easy to order",
    description: "Easily Book Cab Online with our website or call our customer support team.",
  },
  {
    image: "images/img_clock.svg",
    title: "Great tariffs",
    description:
      "Rent A Car !Our car hire tariff are very low when compare to other operators in Lucknow. Book online cabs with best prices in Lucknow at Yatri Car Rental. ",
  },
];

export default function LANDINGPAGEKSHITIZ2Page() {
  return (
    <>
      <Helmet>
        <title>Intercity Cab Service - Affordable One-Way Rentals | Yatri Car Rental</title>
        <meta
          name="description"
          content="Discover India's leading one-way inter-city cab service. Affordable, reliable rentals with no return fare. Book your outstation cab for local, airport, or round trips 24/7. Experience hassle-free travel with Yatri Car Rental."
        />
      </Helmet>

      {/* main layout section */}
      <div className="w-full bg-white-A700 pt-[60px] md:pt-5">
        {/* header section */}
        <div className="flex flex-col gap-[619px] md:gap-[464px] sm:gap-[309px]">
          <div className="flex flex-col gap-[98px] md:gap-[73px] sm:gap-[49px]">
            {/* navigation bar section */}
            <div className="flex flex-col gap-[38px]">
              <div className="container-xs md:p-5">
                <div className="flex items-center justify-between gap-5 md:flex-col">
                  <Img
                    src="images/img_header_logo.png"
                    alt="header logo"
                    className="h-[65px] w-[200px] rounded-lg object-contain"
                  />
                  <div className="relative h-[40px] w-[25%] md:h-auto md:w-full">
                    <div className="flex w-full items-center justify-center">
                      <div className="flex w-[29%] items-center justify-center">
                        <Img src="images/img_vector_8.svg" alt="vector image" className="h-[37px] w-[81%]" />
                        <div className="relative ml-[-17px] h-[16px] w-[23px] rounded-[11px] border-[11px] border-solid border-green-900 bg-green-900 shadow-lg" />
                      </div>
                      <div className="relative ml-[-27px] flex flex-1 items-start justify-center">
                        <Img
                          src="images/img_arrow_down.svg"
                          alt="arrow image"
                          className="relative z-[2] mt-[9px] h-[10px]"
                        />
                        <div className="relative ml-[-11px] flex flex-1 items-center">
                          <Img src="images/img_lock.svg" alt="lock image" className="relative z-[1] h-[37px] w-[27%]" />
                          <div className="relative ml-[-29px] flex flex-1 justify-center rounded-[20px] bg-green-900 p-[9px]">
                            <Heading size="md" as="h1" className="text-shadow-ts1 self-end capitalize !text-white-A700">
                              +91876578984
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[27%] top-[2.72px] z-[3] m-auto flex w-[7%] items-center">
                      <div className="relative z-[4] h-[4px] w-[6px] self-end rounded-[3px] bg-white-A700 shadow-sm" />
                      <Img
                        src="images/img_close.svg"
                        alt="close image"
                        className="relative ml-[-3px] h-[20px] w-[19px]"
                      />
                    </div>
                    <Heading
                      size="xl"
                      as="h2"
                      className="absolute bottom-[1.18px] left-[9%] m-auto h-[35px] w-[34px] !text-white-A700"
                    >
                      24
                    </Heading>
                    <Heading
                      size="xl"
                      as="h3"
                      className="absolute bottom-[1.06px] left-[36%] z-[5] m-auto !text-green-900"
                    >
                      7
                    </Heading>
                  </div>
                  <div className="flex w-[22%] items-center justify-center gap-7 md:w-full">
                    <div className="flex flex-1 flex-col items-center gap-[9px]">
                      <Button color="green_900" size="lg" shape="circle" className="w-[52px] !rounded-[26px]">
                        <Img src="images/img_download.svg" />
                      </Button>
                      <Text size="6xl" as="p" className="!font-lato !text-[28.8px] !text-black-900">
                        Download App
                      </Text>
                    </div>
                    <div className="flex flex-col items-center gap-[7px]">
                      <Button color="green_900" size="lg" shape="circle" className="w-[52px] !rounded-[26px]">
                        <Img src="images/img_lock_white_a700.svg" />
                      </Button>
                      <Text size="6xl" as="p" className="!font-lato !text-[28.8px] !text-black-900">
                        Ravi
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* hero section */}
              <div className="flex flex-col">
                <div className="h-[683px] bg-white-A700 bg-[url(/public/images/img_frame_1686551801.png)] bg-cover bg-no-repeat pr-5 md:h-auto">
                  <div>
                    <div className="flex items-start md:flex-col">
                      <div className="flex w-full flex-col items-start rounded-[50%] bg-black-900_7f p-5 blur-[200.00px] backdrop-opacity-[0.5]">
                        <Text
                          size="8xl"
                          as="p"
                          className="mb-[400px] mt-[269px] w-[69%] !text-[47.52px] uppercase leading-[57px] tracking-[0.48px] !text-white-A700 md:w-full"
                        >
                          <span className="text-white-A700"> Inida </span>
                          <span className="font-semibold text-light_green-A700">
                            <>
                              Leading
                              <br />
                              One-Way Inter-City Cab Service Provider
                            </>
                          </span>
                        </Text>
                      </div>
                      <div className="relative ml-[-254px] mt-[186px] flex w-full flex-col items-center justify-center gap-[26px] rounded-[15px] bg-gray-100_e5 p-[35px] shadow-md md:ml-0 md:p-5">
                        <div className="flex w-[76%] flex-col items-center gap-[25px] md:w-full">
                          <div className="flex gap-9 self-stretch sm:flex-col">
                            <Button
                              color="green_900"
                              size="md"
                              shape="round"
                              className="w-full border border-solid border-green-900 font-lato font-medium text-white-A700 shadow-2xl sm:px-5"
                            >
                              Outstation
                            </Button>
                            <Button
                              color="white_A700"
                              size="md"
                              shape="round"
                              className="w-full border border-solid border-green-900 font-lato font-medium sm:px-5"
                            >
                              Local
                            </Button>
                            <Button
                              color="white_A700"
                              size="md"
                              shape="round"
                              className="w-full border border-solid border-green-900 font-lato font-medium sm:px-5"
                            >
                              Airport
                            </Button>
                          </div>
                          <div className="flex w-[66%] justify-between gap-5 md:w-full">
                            <Button
                              color="green_900"
                              size="sm"
                              shape="round"
                              className="min-w-[146px] border border-solid border-green-900 font-lato font-semibold tracking-[0.19px] text-white-A700 sm:px-5"
                            >
                              One Way
                            </Button>
                            <Button
                              color="white_A700"
                              size="sm"
                              shape="round"
                              className="min-w-[145px] border border-solid border-green-900 font-lato font-semibold sm:px-5"
                            >
                              Round Trip
                            </Button>
                          </div>
                        </div>
                        <div className="flex w-[82%] flex-col gap-[21px] md:w-full">
                          <div className="flex gap-[31px] md:flex-col">
                            <div className="flex flex-1 flex-col items-start md:self-stretch">
                              <Heading as="h4" className="!text-[14.4px]">
                                FROM
                              </Heading>
                              <Img
                                src="images/img_frame_40265.png"
                                alt="from image"
                                className="h-[30px] w-full object-cover md:h-auto"
                              />
                            </div>
                            <Img
                              src="images/img_microphone.svg"
                              alt="microphone image"
                              className="h-[48px] w-[48px] md:w-full"
                            />
                            <div className="flex flex-1 flex-col items-start md:self-stretch">
                              <Heading as="h5" className="!text-[14.4px]">
                                TO
                              </Heading>
                              <Img
                                src="images/img_frame_40269.svg"
                                alt="to image"
                                className="h-[30px] w-full md:h-auto"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between gap-5 sm:flex-col">
                            <div className="flex w-[42%] flex-col items-start sm:w-full">
                              <Heading as="h6" className="!text-[14.4px]">
                                PICK UP DATE
                              </Heading>
                              <Img
                                src="images/img_frame_40267.svg"
                                alt="pickup date image"
                                className="h-[27px] w-full md:h-auto"
                              />
                            </div>
                            <div className="flex w-[42%] flex-col items-start sm:w-full">
                              <Heading as="p" className="!text-[14.4px]">
                                PICK UP AT
                              </Heading>
                              <DatePicker name="Time Picker" className="self-stretch bg-transparent p-5" />
                            </div>
                          </div>
                        </div>
                        <Button
                          color="green_900"
                          size="xs"
                          shape="round"
                          className="mb-1 min-w-[270px] !rounded-md border border-solid border-green-900 font-lato font-bold text-white-A700 shadow-xl sm:px-5"
                        >
                          EXPLORE CABS
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* features section */}
                <div className="container-xs relative mt-[-63px] md:p-5">
                  <div className="rounded-[50px] bg-blue_gray-100 p-5">
                    <div className="flex items-center justify-center gap-5 md:flex-col">
                      <div className="flex flex-1 flex-col items-center md:self-stretch">
                        <Heading size="3xl" as="h1" className="!text-[41.82px] !text-black-900">
                          No over-pricing
                        </Heading>
                        <Text size="4xl" as="p" className="!font-lato !text-[26.61px] !text-black-900">
                          Cheapest costs I Competitive prices
                        </Text>
                      </div>
                      <div className="h-full w-px bg-black-900_cc md:h-px md:w-full" />
                      <div className="flex flex-1 flex-col items-center md:self-stretch">
                        <Heading size="lg" as="h4" className="!text-black-900">
                          Download Now!
                        </Heading>
                        <div className="flex self-stretch sm:flex-col">
                          <Img
                            src="images/img_image_6.png"
                            alt="first image"
                            className="h-[79px] w-[50%] object-cover sm:w-full"
                          />
                          <Img
                            src="images/img_image_7.png"
                            alt="second image"
                            className="h-[79px] w-[50%] object-cover sm:w-full"
                          />
                        </div>
                      </div>
                      <div className="h-full w-px bg-black-900_cc md:h-px md:w-full" />
                      <div className="flex flex-col items-center gap-1">
                        <Heading size="3xl" as="h1" className="!text-[41.82px] !text-black-900">
                          No return fare
                        </Heading>
                        <Text size="4xl" as="p" className="!font-lato !text-[26.61px] !text-black-900">
                          One-Way cab fare I No hidden charges
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* why choose us section */}
            <div className="flex items-center gap-[23px] md:flex-col">
              <Img
                src="images/img_car_rental_agra.png"
                alt="rental image"
                className="h-[388px] w-[42%] object-cover md:w-full"
              />
              <div className="flex flex-1 flex-col items-start gap-[39px] md:self-stretch md:p-5">
                <Heading size="5xl" as="h1" className="ml-4 !font-roundedmplusc uppercase md:ml-0">
                  <span className="text-gray-700">Why&nbsp;</span>
                  <span className="text-green-900">Yatri ?</span>
                </Heading>
                <div className="self-stretch">
                  <div className="flex flex-col gap-7">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <LANDINGPAGEKSHITIZ2Rowfast
                          {...d}
                          key={"featuresList" + index}
                          className="flex-1 items-start gap-5 md:flex-col"
                        />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>

            {/* car types section */}
            <div className="flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
              <div className="flex gap-1.5 md:flex-col">
                <div className="flex flex-1 flex-col md:p-5">
                  <Button shape="square" className="w-full font-medium tracking-[0.32px] sm:px-5">
                    CAR TYPE
                  </Button>
                  <div className="flex flex-col items-start gap-5 bg-light_green-100 p-[19px]">
                    <Text as="p" className="ml-1.5 md:ml-0">
                      AC Sedans
                    </Text>
                    <Text as="p" className="ml-1.5 md:ml-0">
                      AC Hatchbacks
                    </Text>
                    <Text as="p" className="mb-[17px] ml-1.5 md:ml-0">
                      AC SUV{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex w-[23%] flex-col md:w-full md:p-5">
                  <Button shape="square" className="w-full font-medium tracking-[0.32px] sm:px-5">
                    MODEL INCLUDES
                  </Button>
                  <div className="flex flex-col items-start gap-5 bg-light_green-100 p-[17px]">
                    <Text as="p">Etios, Amaze, Dzire etc.</Text>
                    <Text as="p">Wagon R, Celerio, Micra etc.</Text>
                    <Text as="p" className="mb-[17px]">
                      Ertiga, Xylo etc.{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col md:p-5">
                  <Button shape="square" className="w-full font-medium tracking-[0.32px]">
                    PASSENGERS
                  </Button>
                  <div className="flex justify-center bg-light_green-100 p-[19px]">
                    <div className="mb-3.5 flex flex-col items-start gap-5">
                      <Text as="p">4 Pax</Text>
                      <Text as="p">4 Pax</Text>
                      <Text as="p">6-7 Pax</Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-[32%] flex-col md:w-full md:p-5">
                  <Button shape="square" className="w-full font-medium tracking-[0.32px] sm:px-5">
                    IDEAL FOR
                  </Button>
                  <div className="bg-light_green-100 p-[9px]">
                    <div className="mb-4 mt-[5px] flex flex-col items-start justify-center gap-[25px]">
                      <Text as="p">Comfortable trips with small families</Text>
                      <Text as="p">Budget trips over short distances</Text>
                      <Text as="p">Premium trips with large families</Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-[10%] flex-col md:w-full md:p-5">
                  <Button shape="square" className="w-full font-medium tracking-[0.32px] sm:px-5">
                    FARE
                  </Button>
                  <div className="flex flex-col items-start bg-light_green-100 p-3.5">
                    <div className="mb-[15px] ml-1 flex flex-col items-start justify-center gap-[23px] md:ml-0">
                      <Text as="p">Rs.11/KM</Text>
                      <Text as="p">Rs.11/KM</Text>
                      <Text as="p">Rs.13/KM</Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* customer testimonials section */}
              <div className="container-xs md:p-5">
                <div className="flex gap-[54px] md:flex-col">
                  <div className="flex flex-1 items-start justify-between gap-5 sm:flex-col">
                    <div className="flex w-[88%] flex-col items-center gap-[22px] sm:w-full">
                      <Img src="images/img_user.svg" alt="user image" className="h-[41px] w-[16%]" />
                      <div className="flex flex-col items-center gap-[9px] self-stretch">
                        <Text size="5xl" as="p" className="!text-[27.44px] uppercase !text-green-900">
                          Return Fare, Not Fair!
                        </Text>
                        <Text
                          size="xl"
                          as="p"
                          className="w-full text-center !text-[17.15px] capitalize leading-[25px] !text-black-900"
                        >
                          Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just
                          half of the round trip cost for your one-way travel.
                        </Text>
                      </div>
                    </div>
                    <div className="h-full w-px bg-gray-600 sm:h-px sm:w-full" />
                  </div>
                  <div className="flex w-[27%] flex-col items-center gap-[18px] md:w-full">
                    <Img src="images/img_linkedin.svg" alt="linkedin image" className="h-[73px] w-[15%]" />
                    <div className="flex flex-col items-center gap-[11px] self-stretch px-1">
                      <Text size="5xl" as="p" className="!text-[27.44px] !font-medium uppercase !text-green-900">
                        GPS Based Billing System{" "}
                      </Text>
                      <Text
                        size="xl"
                        as="p"
                        className="w-[96%] text-center !text-[17.15px] capitalize leading-[25px] !text-black-900 md:w-full"
                      >
                        Since the GPS data captures the actual distance and time traveled, it reduce the chance of
                        Kilometer tampering or discrepancies in billing.
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[32%] items-start justify-between gap-5 md:w-full sm:flex-col">
                    <div className="h-full w-px bg-gray-600 sm:h-px sm:w-full" />
                    <div className="flex w-[88%] flex-col items-center gap-[17px] sm:w-full">
                      <Img src="images/img_car.svg" alt="car" className="h-[67px] w-[19%]" />
                      <div className="flex flex-col items-center gap-[18px] self-stretch">
                        <Text size="5xl" as="p" className="!text-[27.44px] uppercase !text-green-900">
                          Now available routes are!
                        </Text>
                        <Text
                          size="xl"
                          as="p"
                          className="w-[72%] text-center !text-[17.15px] capitalize leading-[25px] !text-black-900 md:w-full"
                        >
                          Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* travel info section */}
            <div className="container-xs md:p-5">
              <div className="flex items-center md:flex-col">
                <div className="flex flex-1 flex-col gap-[26px] md:self-stretch">
                  <Heading
                    size="2xl"
                    as="h1"
                    className="w-[96%] !font-roundedmplusc uppercase leading-[53px] md:w-full"
                  >
                    <span className="text-gray-700">Why choose AC Bus or AC Train for your&nbsp;</span>
                    <span className="text-green-900">One-way Journey?</span>
                  </Heading>
                  <Text as="p" className="!font-lato capitalize leading-6">
                    <span className="font-poppins text-gray-700">
                      <>
                        Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your
                        travel time and you travel at your own private space also to enjoy your journey. Our one way
                        taxi will come at your doorstep and take you to your desired destination. So book you oneway cab
                        from Lucknow to Gorakhpur or Varanasi to Bareilly.
                        <br />
                      </>
                    </span>
                    <span className="font-poppins font-extrabold text-gray-700">read More....</span>
                  </Text>
                </div>
                <Img
                  src="images/img_image_processin.png"
                  alt="image"
                  className="h-[409px] w-[48%] object-cover md:w-full"
                />
              </div>
            </div>

            {/* service advantages section */}
            <div className="flex flex-col gap-[15px]">
              <div className="container-xs flex flex-col items-center px-[216px] md:p-5 md:px-5">
                <Heading size="6xl" as="h1" className="uppercase tracking-[0.64px] !text-green-900">
                  Why Choose One way Cab?
                </Heading>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-[18px] md:flex-col">
                  <div className="flex flex-1 flex-col items-start gap-5 rounded-[16px] border border-solid border-gray-700 bg-gray-200_01 p-2.5 md:self-stretch md:p-5">
                    <Text as="p" className="ml-[13px] mt-[25px] capitalize !text-black-900 md:ml-0">
                      Instant Booking & Confirmation
                    </Text>
                    <Text as="p" className="ml-[13px] capitalize !text-black-900 md:ml-0">
                      Confirmed Booking Immediately
                    </Text>
                    <Text as="p" className="ml-[13px] capitalize !text-black-900 md:ml-0">
                      No Return Fare for One-Way Trip
                    </Text>
                    <Text as="p" className="ml-[13px] capitalize !text-black-900 md:ml-0">
                      Clean & Professional Cab Services
                    </Text>
                    <Text as="p" className="mb-[35px] capitalize !text-black-900">
                      Transparent Billing with GPS based billing system
                    </Text>
                  </div>
                  <Img
                    src="images/img_d43c11d76c7db33.png"
                    alt="service image"
                    className="h-[301px] w-[31%] rounded-[15px] object-cover md:w-full"
                  />
                  <div className="relative h-[306px] flex-1 rounded-[16px] border border-solid border-gray-700 bg-gray-200 py-3 pl-3 md:w-full md:flex-none md:self-stretch md:p-5">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-start">
                      <Text as="p" className="ml-[11px] capitalize !text-black-900 md:ml-0">
                        Pick-up from your house
                      </Text>
                      <Text as="p" className="ml-[11px] mt-[18px] capitalize !text-black-900 md:ml-0">
                        Dedicated Cab just for you
                      </Text>
                      <Text as="p" className="ml-[11px] mt-[22px] capitalize !text-black-900 md:ml-0">
                        Drop to your desired destination
                      </Text>
                      <Text as="p" className="mt-[78px] capitalize !text-black-900">
                        Multiple Payment Option including Credit Card.
                      </Text>
                    </div>
                    <Text
                      as="p"
                      className="absolute bottom-[32%] left-0 right-0 m-auto w-max capitalize !text-black-900"
                    >
                      Completed more than 20,000+ One-Way Trips
                    </Text>
                  </div>
                </div>
                <div className="container-xs md:p-5">
                  <Text size="7xl" as="p" className="text-center uppercase leading-[54px] !text-gray-600_01">
                    <span className="font-normal text-gray-600_01">Discover affordable travel with our seamless</span>
                    <span className="font-normal text-green-900">&nbsp;</span>
                    <span className="font-semibold text-green-900">intercity car rentals</span>
                    <span className="font-normal text-gray-600_01">
                      &nbsp;in India – where excellence meets affordability with standardized rates in every city.
                      Unleash your journey!
                    </span>
                  </Text>
                </div>
              </div>
            </div>

            {/* additional info section */}
            <div className="container-xs flex flex-col gap-[100px] md:gap-[75px] md:p-5 sm:gap-[50px]">
              <div className="flex flex-col gap-5">
                <div className="flex justify-center rounded-[10px] bg-green-900 p-[13px]">
                  <Heading size="4xl" as="h1" className="uppercase tracking-[0.96px] !text-white-A700">
                    <>
                      Discovering India&#39;s diverse landscapes,
                      <br />
                      one scenic road trip at a time
                    </>
                  </Heading>
                </div>
                <div className="rounded-[10px] bg-gray-100 p-[26px] sm:p-5">
                  <Text size="3xl" as="p" className="my-5 leading-[33px]">
                    <>
                      Experience the thrill of road travel with our reliable car rental and taxi service as we explore
                      the diverse landscapes of India together. We&#39;re passionate about making car hire accessible
                      and enjoyable for everyone.
                      <br />
                      <br />
                      Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With
                      a presence in over 2000 cities across India, we&#39;re here to take you wherever your heart
                      desires with our car rental services.
                      <br />
                      <br />
                      We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and Savor
                      regional cuisines along the way. These moments of discovery enrich your travels and create lasting
                      memories through our rent a car service.
                      <br />
                      <br />
                      No destination is too far or too close; we encourage you to explore the beauty around you with our
                      car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your
                      vicinity with our taxi service.
                      <br />
                      <br />
                      Planning your trip is a breeze with our user-friendly website, or you can chat with our travel
                      experts at 8960170877 for personalized guidance on car rental. Our cab booking app simplifies the
                      process, ensuring a hassle-free experience when you rent a car.
                      <br />
                      <br />
                      Our experienced drivers are your companions on the road, guiding you through India&#39;s best
                      experiences with our car rental and taxi service. From booking to your safe return home, we&#39;re
                      dedicated to ensuring you have an exceptional road trip.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex justify-center rounded-[10px] bg-green-900 p-3">
                  <Heading size="4xl" as="h1" className="uppercase tracking-[0.96px] !text-white-A700">
                    Why Choose Yatri Car Rental?
                  </Heading>
                </div>
                <div className="rounded-[10px] bg-gray-100 p-[18px]">
                  <Text size="3xl" as="p" className="my-[27px] leading-[33px]">
                    <>
                      Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental
                      and taxi services since 2014. Our primary goal is to offer our clients an exceptional car rental
                      and cab booking experience, and we take great pride in our commitment to safety, reliability, and
                      experienced drivers. These qualities are evident across all our car rental services, making us the
                      preferred choice for those seeking rental cars and taxi services in INDIA.
                      <br />
                      <br />
                      Service You Can Trust - At Yatri Car Rental, we are dedicated to providing dependable services in
                      INDIA. We guarantee that we won&#39;t cancel any bookings without advance notification, and our
                      rental cars are meticulously maintained to ensure a seamless and stress-free journey for our
                      clients.
                      <br />
                      <br />
                      Safety is Our Priority - Safety and comfort are paramount at Yatri Car Rental in INDIA. We
                      exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city&#39;s
                      roads and traffic regulations. Our drivers are committed to delivering excellent customer service
                      and ensuring a comfortable and stress-free travel experience for passengers.
                      <br />
                      <br />
                      Expert Chauffeurs at Your Service - Yatri Car Rental takes pride in selecting only the most
                      skilled, knowledgeable, and courteous drivers to enhance the convenience and satisfaction of our
                      clients.
                      <br />
                      <br />
                      Extensive Industry Experience - With over 10 years of industry expertise, Yatri Car Rental is your
                      go-to choice for premium car hire services in Lucknow, Uttar Pradesh.
                      <br />
                      <br />
                      Proven Track Record - We place a strong emphasis on transparency in our billing system and
                      consistently strive to provide a seamless and satisfactory experience for our customers. Our
                      commitment to customer comfort and satisfaction is evident in our outstanding Google ratings,
                      where we consistently receive ratings of 4.8 stars or higher.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
