import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { FaLocationDot, FaClock, FaCheck } from "react-icons/fa6";
import { GiMineTruck, GiWeight } from "react-icons/gi";
import { RiPercentFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import skip4Yard from "../assets/Skip-Sizes-3D_4-Yard.webp";
import skip6Yard from "../assets/Skip-Sizes-3D_6-Yard.webp";
import skip8Yard from "../assets/Skip-Sizes-3D_8-Yard.webp";
import skip12Yard from "../assets/Skip-Sizes-3D_12-Yard.webp";
const SkipCard = ({ skips }) => {
  const [selectedSkip, setSelectedSkip] = useState(skips[0]);
  const imageMap = {
    4: skip4Yard,
    6: skip4Yard,
    8: skip6Yard,
    10: skip6Yard,
    12: skip6Yard,
    14: skip6Yard,
    16: skip8Yard,
    20: skip12Yard,
    40: skip12Yard,
  };

  const imageSrc = imageMap[selectedSkip.size] || skipDefault;
  useEffect(() => {
    if (skips && skips.length > 0) {
      setSelectedSkip(skips[0]);
    }
  }, [skips]);

  const handleSelect = (id) => {
    const skip = skips.find((s) => s.id === id);
    setSelectedSkip(skip);
  };
  return (
    <>
      <div className="flex flex-row items-start space-x-10 justify-center h-screen mt-10 ml-20">
        <Card
          className="w-2/5 rounded-none p-4"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={imageSrc}
        >
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"></h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-start">
            <span className="poppins mr-2 rounded-none bg-cyan-100 px-2.5 py-0.5 text-lg font-semibold text-cyan-800 dark:bg-green-300 dark:text-green-700">
              {selectedSkip?.size} YARD SKIP
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between pt-5">
              <span className=" text-3xl font-bold text-gray-900 dark:text-white">
                £{selectedSkip?.price_before_vat}
              </span>
              <a
                href="#"
                className="rounded-none p-4 bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Choose & Continue
              </a>
            </div>
            <div className="flex items-center">
              <RiPercentFill className="text-xs text-green-2000 dark:text-green-600 mr-1" />
              <p className="poppins italic text-xs text-gray-2000 dark:text-white">
                Before VTA {selectedSkip?.vat}%
              </p>
            </div>
          </div>
        </Card>

        <Card
          className="w-2/4 bg-red-900 rounded-none p-4"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        >
          <a href="#">
            <h2 className="poppins text-5xl font-semibold tracking-tight text-gray-2000 dark:text-white  ">
              {selectedSkip?.size} yard skip
            </h2>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <h2 className="poppins text-lg font-semibold tracking-tight text-gray-2000 dark:text-white">
              From{" "}
              <span className="ml-3 mr-2 rounded-none bg-cyan-100 px-2.5 py-0.5 text-lg font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                £{selectedSkip?.price_before_vat}
              </span>{" "}
              excl. VAT ({selectedSkip?.vat}%)
            </h2>
          </div>
          <div className="mb-5 mt-2.5 flex items-center">
            <h2 className=" italic poppins text-xl font-thin tracking-tight text-gray-2000 dark:text-white  ">
              Perfect for general waste and bulky items.
              <p className="poppins text-xs font-thin tracking-tight text-gray-2000 dark:text-white ml-2">
                Imagery and information shown throughout this website may not
                reflect the exact shape or size specification, colours may vary,
                options and/or accessories may be featured at additional cost.
              </p>
            </h2>
          </div>
          <div className="mb-5 mt-2.5  items-center">
            <div className="flex items-center mb-6">
              <FaClock className="text-lg text-gray-2000 dark:text-white mr-2" />
              <p className="poppins text-sm text-gray-2000 dark:text-white mr-6">
                Hire period - {selectedSkip?.hire_period_days} days
              </p>

              <GiMineTruck className="text-xl text-gray-2000 dark:text-white mr-2" />
              <p className="poppins text-sm text-gray-2000 dark:text-white">
                Transport cost -{" "}
                {selectedSkip?.transport_cost != null
                  ? `£${selectedSkip?.transport_cost}`
                  : "Free"}
              </p>
            </div>

            <div className="flex items-center">
              <GiWeight className="text-lg text-gray-2000 dark:text-white mr-2" />
              <p className="poppins text-sm text-gray-2000 dark:text-white mr-6">
                Cost per tonne -{" "}
                {selectedSkip?.per_tonne_cost != null
                  ? `£${selectedSkip?.per_tonne_cost}`
                  : "Free"}
              </p>

              <FaLocationDot className="text-lg text-gray-2000 dark:text-white mr-2" />
              <p className="poppins text-sm text-gray-2000 dark:text-white">
                Lowestoft, UK
              </p>
            </div>
          </div>

          <div className="mb-5 mt-2.5  items-center">
            <div className="flex items-center mb-6 gap-2">
              <div className="flex items-center">
                {selectedSkip?.allowed_on_road ? (
                  <>
                    <FaCheck className="text-lg text-green-400 mr-2" />

                    <p className="poppins text-sm text-white">
                      Allowed on the road
                    </p>
                  </>
                ) : (
                  <>
                    <RxCross2 className="text-xl text-red-500 mr-2" />
                    <p className="poppins text-sm text-white">
                      Not allowed on the road
                    </p>
                  </>
                )}
              </div>

              <div className="flex items-center">
                {!selectedSkip?.forbidden ? (
                  <>
                    <FaCheck className="text-lg text-green-400 mr-2" />

                    <p className="poppins text-sm text-white">
                      Booking allowed for this skip.
                    </p>
                  </>
                ) : (
                  <>
                    <RxCross2 className="text-xl text-red-500 mr-2" />
                    <p className="poppins text-sm text-white">
                      Booking not allowed for this skip.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center">
              {selectedSkip?.allows_heavy_waste ? (
                <>
                  <FaCheck className="text-lg text-green-400 mr-2" />
                  <p className="poppins text-sm text-white">
                    Heavy waste allowed.
                  </p>
                </>
              ) : (
                <>
                  <RxCross2 className="text-xl text-red-500 mr-2" />
                  <p className="poppins text-sm text-white">
                    Heavy waste not allowed.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-4  border-red-500 cursor-pointer">
            {skips.map((skip) => (
              <a
                key={skip.id}
                onClick={() => handleSelect(skip.id)}
                className={`poppins rounded-none p-4 bg-cyan-700 px-6 py-3.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 ${
                  skip.id === selectedSkip.id
                    ? "dark:bg-green-500"
                    : "dark:bg-yellow-400"
                }  dark:hover:bg-yellow-500 dark:focus:ring-cyan-800`}
              >
                {skip.size} yard skip
              </a>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};

export default SkipCard;
